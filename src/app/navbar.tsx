"use client"

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Navbar() {
    const DropdownContent = ({variant, color}) => (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          color={color}
          variant={variant}
          className="capitalize hover:border"
        >
          Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        color={color} 
        variant={variant}
      >
        <DropdownItem key="home">Home</DropdownItem>
        <DropdownItem key="about">About Us</DropdownItem>
        <DropdownItem key="contact">Contact Us</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )

  return (
    <div className="flex flex-wrap gap-4">
      <DropdownContent color="default" variant="shadow" />
    </div>
  );
}
