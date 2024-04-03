import { Button, TextField, Typography } from "@mui/material";
const RegisterPage = () => {
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          marginBottom: 3,
          fontFamily: "Popins",
        }}
        variant="h2"
        component="h2"
      >
        Регистрация
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          marginBottom: 3,
          fontFamily: "Popins",
        }}
        variant="body1"
      >
        Введите данные для регистрации
      </Typography>
      <TextField
        sx={{
          marginBottom: 3,
        }}
        fullWidth={true}
        label="Name"
        variant="outlined"
        placeholder="Введите вашу имя"
      />
      <TextField
        sx={{
          marginBottom: 3,
        }}
        fullWidth={true}
        label="Username"
        variant="outlined"
        placeholder="Введите ваш username"
      />
      <TextField
        sx={{
          marginBottom: 3,
        }}
        fullWidth={true}
        label="Email"
        variant="outlined"
        placeholder="Введите ваш Email"
      />
      <TextField
        sx={{
          marginBottom: 3,
        }}
        type="password"
        fullWidth={true}
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
      />
      <TextField
        sx={{
          marginBottom: 3,
        }}
        type="password"
        fullWidth={true}
        label="Password"
        variant="outlined"
        placeholder="Повторите ваш пароль"
      />
      <Button
        sx={{
          fontFamily: "Popins",
          width: "60%",
          marginBottom: 3,
        }}
        variant="contained"
      >
        ЗАРЕГЕСТРИРОВАТЬСЯ
      </Button>
      <Typography variant="body1" sx={{ fontFamily: "Popins" }}>
        У вас есть аккаунт? <span className="insitingText">Авторизация</span>
      </Typography>
    </>
  );
};

export default RegisterPage;
