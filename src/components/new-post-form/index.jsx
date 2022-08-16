import usePost from "../../hook/usePost";
import { FormContainer, Input, Button, Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function NewPostForm() {
  const { addPost } = usePost();
  const navigate = useNavigate();
  const ID_POST = uuid();

  const schema = yup.object().shape({
    image: yup.string().required("Link de la imagen es requerida"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    addPost({
      id: ID_POST,
      user: {
        name: "nazarenog",
        avatar: "https://picsum.photos/id/854/40",
      },
      image: data.image,
      likes: 0,
      description: data.description,
    });
    navigate("/");
  };

  return (
    <Container>
      <h3>Crear un Post</h3>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <label>URL Imagen</label>
        <Input type="text" {...register("image")} />
        <p>{errors.image?.message}</p>
        <label>Descripción</label>
        <Input type="text" {...register("description")} />
        <Button>Crear Post</Button>
      </FormContainer>
    </Container>
  );
}
