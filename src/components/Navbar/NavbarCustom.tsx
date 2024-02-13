import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
  Button,
} from "@nextui-org/react";
import { GithubIcon, LinkedInIcon } from "~/components/Icons";

export default function NavbarCustom() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Daniel Miller</p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://wordsbydaniel.xyz">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="./Daniel Miller Resume.pdf">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Button
          isIconOnly
          variant="solid"
          aria-label="View"
          className="z-10 h-full bg-transparent hover:text-zinc-200"
          as={Link}
          href="https://www.github.com/syntheit"
          disableRipple
        >
          <GithubIcon size={32} />
        </Button>
        <Button
          isIconOnly
          variant="solid"
          aria-label="View"
          className="z-10 h-full bg-transparent hover:text-zinc-200"
          as={Link}
          href="https://www.linkedin.com/in/daniel-m-miller"
          disableRipple
        >
          <LinkedInIcon size={32} />
        </Button>
        <Avatar
          isBordered
          className="transition-transform"
          color="primary"
          size="sm"
          src="./profile_picture.jpg"
        />
      </NavbarContent>
    </Navbar>
  );
}
