import {
  Button,
  Form,
  FormWrapper,
  Input,
  InputWrapper,
  Label,
} from "./ProfileForm.styled";

const ProfileForm = ({ name, bio, urlImage, setName, setBio, setUrlImage }) => {
  return (
    <FormWrapper>
      <h1>Edit your profile</h1>

      <Form>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            onChange={(event) => setName(event.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            name="bio"
            id="bio"
            autoComplete="off"
            onChange={(event) => setBio(event.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="imageUrl" src={urlImage}>
            Image Url
            {/* https://img.freepik.com/vetores-premium/imagem-de-perfil-de-personagem-de-desenho-animado-avatar-jovem_18591-55058.jpg?w=740 */}
          </Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="off"
            onChange={(event) => setUrlImage(event.target.value)}
          />
        </InputWrapper>

        <Button>Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;
