import { UserProvider } from "./auth/contexts/UserProvider";
import { AppRouter } from "./router/AppRouter";

export const EventApp = () => {

    return (
        <>
            <UserProvider>
                <AppRouter />
            </UserProvider>
        </>
    );
};
