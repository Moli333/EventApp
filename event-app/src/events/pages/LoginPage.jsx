import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
import { useForm } from '../../hooks/useForm'; // Ajusta el path según tu estructura

const initialForm = {
    email: '',
    password: ''
};

export const LoginPage = () => {
    const { email, password, onInputChange, resetForm } = useForm(initialForm);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Datos del formulario:', { email, password });
        // Aquí podrías llamar a un login, actualizar el contexto, etc.
        resetForm();
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Iniciar Sesión
            </Typography>

            <Paper elevation={3} sx={{ p: 4, mt: 3 }}>
                <Box
                    component="form"
                    onSubmit={onSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <TextField
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={onInputChange}
                        required
                    />
                    <TextField
                        label="Contraseña"
                        name="password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={onInputChange}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Iniciar sesión
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};
