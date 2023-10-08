import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
    email: 'jc@gmail.com',
    password: '123456',
    displayName: 'Juan Urquiza'
}

export const RegisterPage = () => {

    const { displayName, email, password, onInputChange, formState } = useForm(formData);

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        
        <AuthLayout title='Register'>

            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label='Nombre completo'
                            type='text'
                            placeholder='John Doe'
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange} 
                            />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label='Correo'
                            type='email'
                            placeholder='correo@gmail.com'
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange} 
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label='Contraseña'
                            type='password'
                            placeholder='Contraseña'
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange} 
                        />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb:2, mt: 1 }}>
                        <Grid item xs={ 12 } >
                            <Button 
                                type='submit'
                                variant="contained" 
                                fullWidth
                            >
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={ RouterLink } color='inherit' to='/auth/login'>
                            Ingresar
                        </Link>
                    </Grid>

                </Grid>
            </form>

        </AuthLayout>

    )

}




