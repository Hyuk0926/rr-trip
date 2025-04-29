export interface Props {
  navigation: {
    name: string;
    href: string;
  }[];
}

const Nav = ({ navigation }: Props) => {
  return (
    <ul className="nav">
      {navigation.map((item) => (
        <li key={item.href}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
