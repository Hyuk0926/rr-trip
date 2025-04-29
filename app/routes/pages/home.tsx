import './home.tsx';

import Footer from './layouts/components/footer';
import Header from './layouts/components/header';
import Main from './layouts/components/main';

const reservations = [
  {
    position: '제주도',
    explanation: '자연과 힐링이 있는 국내 최고의 여행지',
    price: '₩399,000 ~',
  },
  {
    position: '부산',
    explanation: '활기찬 해운대와 맛있는 음식이 가득한 도시',
    price: '₩299,000 ~',
  },
  {
    position: '도쿄',
    explanation: '쇼핑과 문화가 어우러진 매력적인 일본 여행',
    price: '₩799,000 ~',
  },
];

const notices = [
  {
    content: '[이벤트] 여름맞이 해외여행 20% 할인!',
  },
  {
    content: '6월 항공권 사전 예약 안내',
  },
  {
    content: '코로나 이후 여행 안전 수칙',
  },
];

function App() {
  return (
    <div>
      <Header />
      <Main reservations={reservations} notices={notices} />
      <Footer />
    </div>
  );
}

export default App;
