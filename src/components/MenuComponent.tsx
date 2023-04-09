import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const MenuComponent = () => {
  const hover = {
    backgroundColor: "#2c2c2e",
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList bgColor={"#28282b"}>
        <a
          href="https://portfolio-jasiukolega.vercel.app/works"
          target={"_blank"}
        >
          <MenuItem bgColor={"#28282b"} _hover={hover}>
            <Text>Projects</Text>
          </MenuItem>
        </a>
        <MenuItem bgColor={"#28282b"} _hover={hover}>
          YourCards
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuComponent;
