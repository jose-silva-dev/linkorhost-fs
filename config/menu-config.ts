import {
	Database,
	Server,
	Layers,
	Globe,
	Shield,
	Mail,
	Lock,
	Save,
	BarChart,
	ArrowRight,
} from "lucide-react";

export const menuItems = [
	{
		title: "Servidores",
		icon: Server,
		id: "servidores",
		items: [],
	},
	{
		title: "Hospedagem",
		icon: Database,
		id: "hospedagem",
		items: [
			{
				title: "Hospedagem de Site",
				href: "https://app.linkor.host/store/hospedagem-de-site",
				icon: Database,
			},
			{
				title: "Hospedagem em Cloud",
				href: "https://app.linkor.host/store/",
				icon: Database,
			},
			{
				title: "Hospedagem Wordpress",
				href: "https://app.linkor.host/store/",
				icon: Database,
			},
			{
				title: "Hospedagem de Site Gamer",
				href: "https://app.linkor.host/store/hospedagem-de-site-gamer",
				icon: Database,
			},
		],
	},
	{
		title: "Serviços",
		icon: Layers,
		id: "servicos",
		items: [
			{
				title: "Certificados SSL",
				href: "https://app.linkor.host/store/ssl-certificates",
				icon: Shield,
			},
			{
				title: "Serviços de Email",
				href: "https://app.linkor.host/store/email-services",
				icon: Mail,
			},
			{
				title: "Segurança de Site",
				href: "https://app.linkor.host/store/sitelock",
				icon: Lock,
			},
			{
				title: "Backup de Website",
				href: "https://app.linkor.host/store/codeguard",
				icon: Save,
			},
			{
				title: "Ferramenta SEO",
				href: "https://app.linkor.host/store/marketgoo",
				icon: BarChart,
			},
		],
	},
	{
		title: "Domínios",
		icon: Globe,
		id: "dominios",
		items: [
			{
				title: "Registrar um novo domínio",
				href: "https://app.linkor.host/cart.php?a=add&domain=register",
				icon: Globe,
			},
			{
				title: "Transferir um domínio",
				href: "https://app.linkor.host/cart.php?a=add&domain=transfer",
				icon: ArrowRight,
			},
		],
	},
];
