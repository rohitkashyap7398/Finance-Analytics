import React from 'react';
import './park.css';

const ParkPage = () => {
  return (
    <div className="park-container">
      {/* Top Navbar */}
      <header className="park-navbar">
        <div className="park-logo">
           <img src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png" alt="logo" style={{width:24}} />
           <span>Парк Гагарина</span>
        </div>
        <nav className="park-nav-links">
           <a href="#">О парке</a>
           <a href="#">События</a>
           <a href="#">Галерея</a>
           <a href="#">Контакты</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="park-hero">
         <div className="park-hero-content">
           <h1>Парк отдыха<br/>имени Юрия Гагарина</h1>
           <p>Парк культуры и отдыха Промышленного района Самары.<br/>Место отдыха для всей семьи.</p>
           <button className="park-hero-btn">Как проехать</button>
         </div>
         <div className="park-ferris-wheel">
           <img src="https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?q=80&w=800" alt="Ferris wheel" style={{mixBlendMode: 'multiply', opacity: 0.3}} />
         </div>
      </section>

      {/* Activities */}
      <section className="park-activities">
        <h2>Чем заняться в парке</h2>
        <p className="park-subtext">Посетители могут взять напрокат лодки или водные велосипеды и поплавать в искусственном канале. Для малышей можно арендовать яркие электро-лодочки.</p>
        
        <div className="park-cards">
           <div className="park-card">
              <div className="park-card-top" style={{backgroundColor: '#ef9498'}}>
                 <h3>Семейные аттракционы</h3>
                 <button>Посмотреть</button>
              </div>
              <div className="park-card-img">
                 <img src="https://images.unsplash.com/photo-1536640712-4d4c36ef0e12?w=300" alt="Family" />
              </div>
           </div>
           <div className="park-card">
              <div className="park-card-top" style={{backgroundColor: '#95bedc'}}>
                 <h3>Экстрим-аттракционы</h3>
                 <button>Посмотреть</button>
              </div>
              <div className="park-card-img">
                 <img src="https://images.unsplash.com/photo-1518116345636-6db278ec64cc?w=300" alt="Extreme" />
              </div>
           </div>
           <div className="park-card">
              <div className="park-card-top" style={{backgroundColor: '#d688be'}}>
                 <h3>Другие развлечения</h3>
                 <button>Посмотреть</button>
              </div>
              <div className="park-card-img">
                 <img src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=300" alt="Bicycle" />
              </div>
           </div>
        </div>
        <button className="park-all-btn">Все развлечения</button>
      </section>

      {/* About Section */}
      <section className="park-about">
         <div className="park-about-candy">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cotton-candy-4993529-4161726.png" alt="Cotton Candy" />
         </div>
         <div className="park-about-text">
            <h2>О парке</h2>
            <p>Зеленый островок, парк культуры и отдыха имени Юрия Гагарина - одно из самых популярных мест в Самаре. Прямо в центре города можно побывать в дубовой роще, покататься на лодках по пруду, осмотреть окрестности на колесе обозрения.</p>
            <div className="park-about-features">
               <div>
                  <div className="park-feat-icon">🎈</div>
                  <span>Развлечения для<br/>взрослых и детей</span>
               </div>
               <div>
                  <div className="park-feat-icon">🎪</div>
                  <span>45 европейских<br/>аттракционов</span>
               </div>
               <div>
                  <div className="park-feat-icon">🚲</div>
                  <span>Все для вашего<br/>активного отдыха</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ParkPage;
