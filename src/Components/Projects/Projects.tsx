import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useQuery } from '@apollo/client';
import { GET_Projects } from '../../Graphql/Query';
import { Chip, CircularProgress } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { toast } from 'react-toastify';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
function Projects() {
  const { loading, error, data } = useQuery(GET_Projects)
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const [expanded, setExpanded] = React.useState(false);
  const [expandedId, setExpandedId] = React.useState("");

  const handleExpandClick = (iD: string) => {
    setExpandedId(iD)
    setExpanded(!expanded);
  };

  try {
    if (error) {
      toast.error(error.message)
    }
  } catch (error) {
    console.log(error)
  }
  return (
    <div id="projects" className='lg:pl-64 lg:pr-64 '>
      <h1 className=' text-center font-bold text-2xl mt-10 mb-6'>Personal Projects</h1>
      <div className=' flex justify-center gap-2 flex-wrap'>
        {loading ? <CircularProgress /> : <>
          {data && data.Projects.map((item: any) => {
            return (<Card sx={{ maxWidth: 345 }} key={item.id} >
              {/* <CardMedia
                  component="img"
                  height="194"
                  image='https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60'
                  alt="Paella dish"
                /> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name}
                </Typography>
                {item.TechStack.map((Stacks: string,index:number) => {
                  return (<Chip label={Stacks} variant="outlined" className=' mx-1 my-1' key={index} />)
                })}
                <Typography variant="body2" color="text.secondary">
                  {item.Summary}
                </Typography>
              </CardContent>
              {item.Description.length !== 0 ?
                <><CardActions disableSpacing>
                  {item.Url.trim() ? <div className='text-[#666666] flex gap-2 cursor-pointer' onClick={() => { window.open(item.Url, '_blank')!.focus() }}>
                    <LinkIcon />
                    <p>Live Preview</p>
                  </div> : <></>}
                  <ExpandMore
                    expand={item.id === expandedId ? expanded : false}
                    onClick={() => { handleExpandClick(item.id) }}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                  <Collapse in={item.id === expandedId ? expanded : false} timeout="auto" unmountOnExit>
                    <CardContent>
                       <p className=' font-semibold pb-1'>Description</p>
                      {item.Description.map((Descriptions: string,index:number) => {
                        return (<Typography paragraph key={index}>
                          {Descriptions}
                        </Typography>)
                      })}
                    </CardContent>
                  </Collapse></> : <></>}
            </Card>)
          })}</>}
      </div>
    </div>
  )
}

export default Projects
