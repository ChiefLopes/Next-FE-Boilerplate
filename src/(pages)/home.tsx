"use client";
import { Button, Typography } from "@material-tailwind/react";

export default function Home() {
	return (
		<main className='flex h-screen flex-col items-center justify-between p-24'>
			<Button>Hello World!</Button>
			<Typography variant='h1'>Template Web App.</Typography>
		</main>
	);
}
