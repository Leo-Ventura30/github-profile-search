import React, { useState } from "react"
import { ProfileSearchContainer } from '../../containers/ProfileSearch'
import { UserProfileData } from '../../types'
import { useHistory } from "react-router-dom";

/**
 * tudo que comeca com use é considerado um hook
 */

export const ProfileSearchScreen = () => {
  /**
   * Esse estados sao considerados da screen
   */
  const [userProfileName, setUserUserProfile] = useState<string>('') // react hooks - https://reactjs.org/docs/hooks-intro.html - https://www.youtube.com/watch?v=jcc9T-5inrk
  const [useProfileData, setUserProfileData] = useState<UserProfileData>()

  const history = useHistory();

  const handleOnChangeInput = (profileName: string) => setUserUserProfile(profileName)

  const handleOnSearch = async () => {
    try {
      const response = await fetch(`http://api.github.com/users/${userProfileName}`)

      const body: UserProfileData = await response.json()

      setUserProfileData(body)
    } catch (error) {

      console.log('ocorreu')
    }
  }

  const handleOnGoToProfileDetails = () => {
    history.push("/profile-details")
  }

  return <ProfileSearchContainer
    onSearch={handleOnSearch}
    onChangeProfileName={handleOnChangeInput}
    userProfileName={userProfileName}
    useProfileData={useProfileData}
    onGoToProfileDetails={handleOnGoToProfileDetails}
  />
}

/*
 * Components => sao components que sao reutilizaveis na apliacao. Sao usados por mais de um container. Por exemplo: Botao
 * Containers => sao uma juncao de components que forma uma tela. O container nao contem logica de negocio e nao faz request
 * Screens => Screens importam um containers, e passam a informacao para o mesmo. As screens request e contem logica de negocio
 */

// class Test extends React.Component {
//   state = {
//     userProfileName: ''
      //name
//   }

//   handleOnChangeInput = (profileName: string) => {
//     this.setState({
//       userProfileName: profileName
//     })
//   }

//   render () {
//     return <div>fdafadfasd</div>
//   }

// }