import NavItem from "../components/NavItems";
export default function Nav() {
  return (
    <ul className="flex justify-center space-x-10">
      <NavItem>Profile</NavItem>
      <NavItem>Sklls</NavItem>
      <NavItem>Project</NavItem>
      <NavItem>Contact</NavItem>
    </ul>
  );
}
