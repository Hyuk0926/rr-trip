import Nav from './nav';

const navigation = [
  { name: '홈', href: 'index.html' },
  { name: '여행 상품', href: 'product.html' },
  { name: '예약/문의', href: 'reservation.html' },
];

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>여행을 떠나요</h1>
      </div>
      <div className="container">
        <Nav navigation={navigation} />
      </div>
    </header>
  );
};

export default Header;
