import { FC, memo, PropsWithChildren } from "react";
import Url from "../1-atoms/Url";

const DropdownMenu: FC = () => (
  <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Url href="#" className="flex items-center gap-2">
            <UserIcon className="h-4 w-4" />
            <span>Profile</span>
          </Url>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Url href="#" className="flex items-center gap-2">
            <SettingsIcon className="h-4 w-4" />
            <span>Settings</span>
          </Url>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Url href="#" className="flex items-center gap-2">
            <LogOutIcon className="h-4 w-4" />
            <span>Logout</span>
          </Url>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </>
);

export default memo<PropsWithChildren>(DropdownMenu);
