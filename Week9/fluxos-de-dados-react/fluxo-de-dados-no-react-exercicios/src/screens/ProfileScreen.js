import { useState } from "react";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";

function ProfileScreen() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [urlImage, setUrlImage] = useState("");
  return (
    <ScreenContainer>
      <ProfileMenu name={name} bio={bio} urlImage={urlImage} />

      <ProfileForm
        name={name}
        bio={bio}
        urlImage={urlImage}
        setName={setName}
        setBio={setBio}
        setUrlImage={setUrlImage}
      />
    </ScreenContainer>
  );
}

export default ProfileScreen;
