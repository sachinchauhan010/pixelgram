import SideNav from "@/components/SideNav";
export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen realtive flex-col md:fex-col md:overflow-hidden">
			<div className="w-28 flex-none lg:w-64 md:border-r">
				<SideNav />
			</div>
			<div className="flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto">
				{children}
			</div>
		</div>
	);
}
