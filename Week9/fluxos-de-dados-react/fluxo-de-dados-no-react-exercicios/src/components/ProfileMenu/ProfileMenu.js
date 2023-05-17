import {
  ProfileBio,
  ProfileImage,
  ProfileName,
  ProfileWrapper,
} from "./ProfileMenu.styled";

const ProfileMenu = ({ name, bio, urlImage }) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={urlImage} alt="Profile Image" />
      <ProfileName>{name}</ProfileName>
      <ProfileBio>{bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;
