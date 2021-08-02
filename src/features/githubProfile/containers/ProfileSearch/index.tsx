import React from 'react'
import styled from 'styled-components'
import { Card, CardHeader, Avatar, CardContent, Typography } from "@material-ui/core"
import { UserProfileData } from '../../types'
import { SearchInput } from '../../../../ui/SearchInput'

interface ProfileSearchContainerProps {
  onSearch(): void
  onChangeProfileName(text: string): void
  userProfileName: string
  useProfileData?: UserProfileData
  onGoToProfileDetails(): void
}

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

const Content = styled.div`
  padding: 40px 100px;
  width: 1024px;
  min-height: 400px;
  background-color: #F6F0E1;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    width: 100%;

  }
`

const StyledCard = styled(Card)`
  margin-top: 40px;
`

export const ProfileSearchContainer = ({ onSearch, onChangeProfileName, userProfileName, useProfileData, onGoToProfileDetails }: ProfileSearchContainerProps) => <PageWrapper>
  <Content>

    <SearchInput onSearch={onSearch} onChange={(event) => onChangeProfileName(event.target.value)} value={userProfileName} />

    {
      useProfileData && (
        <StyledCard onClick={onGoToProfileDetails}>
          <CardHeader
            avatar={<Avatar src={useProfileData.avatar_url} />}
            title={useProfileData.name}
            subheader={useProfileData.bio}
          />


        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        </StyledCard>
      )
    }

    {
      useProfileData && (
        <pre>
        {JSON.stringify(useProfileData, null, 2)}
      </pre>
      )
    }
    
  </Content>

</PageWrapper>
