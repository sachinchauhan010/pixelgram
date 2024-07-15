import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import MoreDropDown from './MoreDropDown'

function SideNav() {
	return (
		<div className='flex h-full flex-col px-3 py-4 md:px-2'>
			<div className='border-1 dark:bg-neutral-950 h-16 justify-center fixed z-50 flex-1 w-full md:relative md:h-full bottom-0 md:border-none flex flex-row md:justify-between md:items-start space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-2'>
				<Logo />
				<NavLinks />
			</div>
			<div className="hidden md:flex relative md:mt-auto flex-1 items-end w-full">
				<MoreDropDown/>
			</div>
		</div>
	)
}

export default SideNav
