import {
  FormContainer,
  Form,
  Input,
  StyledLabel,
} from "./FormularioPostagem.styled";

export const FormularioPostagem = ({
  title,
  picture,
  description,
  handleTitle,
  handlePicture,
  handleDescription,
}) => {
  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={title} onChange={handleTitle} />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={picture} onChange={handlePicture} />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            id="descricao"
            value={description}
            onChange={handleDescription}
          />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioPostagem;
