import React from "react";
import { Button, PageHeader } from "antd";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { resetCurrentProduct } from "../../redux";

interface Props {
  showDrawer: () => void;
}

interface TitleProps {
  title: string;
}

const NavBarTitle = ({ title }: TitleProps) => {
  const dispatch = useAppDispatch();
  return (
    <Link onClick={() => dispatch(resetCurrentProduct())} to={"/"}>
      <h2>{title}</h2>
    </Link>
  );
};

const NavBar = ({ showDrawer }: Props) => {
  return (
    <PageHeader
      className="site-page-header"
      title={<NavBarTitle title="Redux Cart" />}
      extra={[
        <Button
          onClick={showDrawer}
          type="link"
          style={{ fontSize: "30px" }}
          key="1"
        >
          <RiShoppingCartFill />
        </Button>
      ]}
    />
  );
};

export default NavBar;
