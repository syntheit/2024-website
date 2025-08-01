import {
  Card,
  CardFooter,
  Image,
  Button,
  CardHeader,
  Link,
  Tooltip,
} from "@nextui-org/react";
import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  ResumeIcon,
  DockerIcon,
  MatrixIcon,
  SpotifyIcon,
} from "~/components/Icons";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-black text-white">
      {/* <div className="absolute top-0 right-0 flex gap-3 mt-10 mr-12 text-white/50">
        <h3 className="text-white/80">EN</h3>
        <h3>FR</h3>
      </div> */}
      <div className="absolute top-0 mt-20 flex flex-col items-center gap-3">
        <h1 className="text-4xl font-bold tracking-wide">Daniel Miller</h1>
        <p className="text-tiny tracking-wider text-white/60">
          Software Developer & Student
        </p>
      </div>
      <div className="grid w-[1200px] grid-cols-12 grid-rows-2 gap-2 px-8">
        <Card
          className="col-span-12 h-[300px] sm:col-span-4"
          isPressable
          as={Link}
          href="/about"
        >
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white/60 drop-shadow-2xl">
              Learn about me
            </p>
            <h4 className="text-large font-medium text-white drop-shadow-2xl">
              Bio
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            className="z-0 h-full w-full object-cover"
            src="/images/indian-falls-overlook.webp"
          />
        </Card>
        <Card
          className="col-span-12 h-[300px] sm:col-span-4"
          isPressable
          as={Link}
          href="/projects&work"
        >
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white/60">
              Projects & Work
            </p>
            <h4 className="text-large font-medium text-white">
              See what I've done
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            className="z-0 h-full w-full object-cover"
            src="/images/thinkpad.webp"
          />
        </Card>
        <Card
          className="col-span-12 h-[300px] sm:col-span-4"
          isPressable
          as={Link}
          href="https://wordsbydaniel.xyz"
        >
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white/60 drop-shadow-2xl">
              wordsbydaniel.xyz
            </p>
            <h4 className="text-large font-medium text-white drop-shadow-2xl">
              Read about things I like
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            className="z-0 h-full w-full object-cover"
            src="/images/new-orleans-streetcar.webp"
          />
        </Card>
        <Card
          isFooterBlurred
          className="col-span-12 h-[300px] w-full sm:col-span-5"
          isPressable
          as={Link}
          href="https://photos.matv.io/share/SjsOTA6_x2G_KhXaMnFewvKfwjq93td7WMyB1wd_xp2LhYP2ppHchTzobv8QtGsfR9A"
        >
          <CardHeader className="absolute top-1 z-10 flex-col items-start">
            <p className="text-tiny font-bold uppercase text-white/60 drop-shadow-2xl">
              The world
            </p>
            <h4 className="text-2xl font-medium text-white drop-shadow-2xl">
              See my photos
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            className="z-0 h-full w-full -translate-y-6 scale-125 object-cover"
            src="/images/waffle-house.webp"
          />
        </Card>
        <Card
          isFooterBlurred
          className="col-span-12 h-[300px] w-full sm:col-span-7"
        >
          <CardHeader className="absolute top-1 z-10 flex-col items-start">
            <p className="text-tiny font-bold uppercase text-white/60 drop-shadow-2xl">
              Get in touch
            </p>
            <h4 className="text-xl font-medium text-white/90 drop-shadow-2xl">
              My information
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            className="z-0 h-full w-full object-cover"
            src="/images/quebec-street.webp"
          />
          <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
            <div className="flex flex-grow items-center gap-2">
              <Button
                isIconOnly
                aria-label="LinkedIn"
                as={Link}
                href="https://www.linkedin.com/in/daniel-m-miller"
              >
                <LinkedInIcon size={24} />
              </Button>
              <Button
                isIconOnly
                aria-label="GitHub"
                as={Link}
                href="https://github.com/syntheit"
              >
                <GithubIcon size={24} />
              </Button>
              <Button
                isIconOnly
                aria-label="DockerHub"
                as={Link}
                href="https://hub.docker.com/u/synzeit"
              >
                <DockerIcon size={24} />
              </Button>
              <Tooltip content="@syntheit:matrix.org" size="md">
                <Button
                  isIconOnly
                  aria-label="Matrix"
                  as={Link}
                  href="https://matrix.to/#/@syntheit:matrix.org"
                >
                  <MatrixIcon size={24} />
                </Button>
              </Tooltip>
                <Button
                  isIconOnly
                  aria-label="Spotify"
                  as={Link}
                  href="https://open.spotify.com/user/312k3mbad43po7ghp67ralyw2j6q"
                >
                  <SpotifyIcon size={24} />
                </Button>
              <Tooltip content="daniel@matv.io" size="md">
                <Button
                  isIconOnly
                  aria-label="Email"
                  as={Link}
                  href="mailto:daniel@matv.io"
                >
                  <EmailIcon size={24} />
                </Button>
              </Tooltip>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="md"
              as={Link}
              href="/Daniel Miller Resume.pdf"
              startContent={<ResumeIcon />}
            >
              My Resume
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
