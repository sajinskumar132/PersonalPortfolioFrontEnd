import { gql } from "@apollo/client";

export const GET_PersonalInfo=gql`{
    Personalinfo{
        id
        name
        Position
        emailId
        linkedinId
        Description
        Resume
    }
}`

export const GET_Skills=gql`{
    Skills{
        id
        name
        image
    }
}`


export const GET_Experiences=gql`{
    Experience{
        id
        CompanyName
        Posting
        StartDate
        EndDate
        Summary
        TaskOrResponsnibility
      }
}`

export const GET_Projects=gql`
        {
            Projects{
            id
            name
            Summary
            TechStack
            Description
            Url
            }
        }
`