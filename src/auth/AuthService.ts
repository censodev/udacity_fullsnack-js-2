import TokenProvider from "./TokenProvider";

export default function AuthService() {
    const tokenProvider = TokenProvider(process.env.JWT_SECRET ?? '')
}