import { useMediaQuery } from "@chakra-ui/react";
import { SidebarMobile } from "./SidebarMobile";
import { SidebarDesktop } from "./SidebarDesktop";

export default function Sidebar() {
  const [isLessThan460] = useMediaQuery("(max-width: 460px");
  console.log(isLessThan460, 'teste')

  return <SidebarDesktop />
}
