export default function({ route, redirect }: any) {
    if (route.path.startsWith("/about")) {
        redirect("/cv");
    }
}
