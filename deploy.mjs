import dotenv from "dotenv";
import FtpDeploy from "ftp-deploy";
import path from "path";


dotenv.config();


async function main() {
    try {
        const outDir = path.join(process.cwd(), "/out");

        await new FtpDeploy().deploy({
            user: process.env.FTP_USERNAME,
            password: process.env.FTP_PASSWORD,
            host: process.env.FTP_HOST,
            port: process.env.FTP_PORT,

            localRoot: outDir,
            remoteRoot: "/html/pizzeria-bei-toni.com",

            include: ["*", "**/*"],
            exclude: [],

            deleteRemote: false, // Set to true if you want to delete ALL FILES in the remote root before uploading
            forcePasv: true // Use passive mode
        })

        console.log("Successfully deployed site")
        return 0;
    } catch (e) {
        console.error("An error occurred during deployment:", e);
        return 1;
    }
}

main().then(code => process.exit(code));