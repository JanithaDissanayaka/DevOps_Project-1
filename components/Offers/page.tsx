// pages/index.tsx or app/page.tsx (depending on your Next.js version)
import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: 'white', backgroundColor: '#000' }}>
      {/* Offer Section */}
      <section
        style={{
          backgroundImage: 'url("/offer-background.PNG")', // Replace with your background image path
          backgroundSize: '50%',
          backgroundPosition: 'Crop',
          width: '1699px',
          height: '882px',
          top: '7826px',
          left: '-1px',
          
          
  
        }}
      >
        <h1 style={{ fontWeight: '400', fontSize: '64px', maxWidth: '721px',height:'178px',top:'8035px',left:'48px',fontFamily:'Jockey One',fontStyle:'Regular' }}>
          GET A SPECIAL OFFER FOR FOR<br />
          YOUR SPECIAL OCCASION
        </h1>

        <ul style={{ maxWidth: '1065px',height:'176px', top: '8270px', listStyle: 'Rergular', paddingLeft: '48px', fontSize: '36px', fontFamily:'Inter',lineHeight:'100%',letterSpacing:'0%',color:'#FFFFFF'}}>
          <li>20% off on dine-in & take-away (Mondays only)</li>
          <li>Valid until July 29, 2025</li>
          <li>Maximum discount : LKR 2,000 per card per day</li>
          <li>Exclusively for HNB Visa and Mastercard credit cardholders</li>
        </ul>

        <button
          style={{
            width: '390px',
            height:'90px',
            backgroundColor: '#F2C211',
            top:'8494px',
            left:'68px',
            borderRadius:'15px',
            
            color: '#000000',
            border: 'Rectangle30',
            padding: '16px 8',
            fontWeight: '400',
            fontSize: '36px',
            fontFamily: 'Inter',
            fontStyle: 'Regular',
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          Book Reservation
        </button>
      </section>

      {/* News and Articles */}
      <section style={{ padding: '16px 8px', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ width:'850px',height:'134px',fontWeight: '400', fontSize: '96px', marginTop: '8819px',marginLeft:'443px', textAlign: 'center',fontFamily:'Jockey One',fontStyle:'Regular',lineHeight:'100%',letterSpacing:'0%'}}>
          OUR NEWS AND ARTICLES
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {/* Card 1 */}
          <article style={{ maxWidth: '300px', textAlign: 'center' }}>
            <Image
              src="/burger.PNG" 
              alt="Beef Meat"
              width={492}
              height={403}
              layout="crop"
              style={{ marginTop:'9064px',marginLeft:'68px',borderRadius: '20px' }}
            />
            <h3 style={{ fontWeight: '400', fontSize: '36px', marginTop: '9490px',marginLeft:'93px',width:'467px',height:'100px',fontFamily:'Jackey One',fontStyle:'Regular',lineHeight:'100%',letterSpacing:'0%',color:'#FFFFFF' }}>
              LOOK HOW WE MAKE BEEF MEAT TASTY WITH THIS TECHNIQUE
            </h3>
            <p style={{ fontSize: '24px', marginTop: '9671px',marginLeft:'116px',width:'159px',height:'36px',fontFamily:'Poppins',fontWeight:'400',fontStyle:'Regular',lineHeight:'100%',letterSpacing:'0%', color: '#F2C211', cursor: 'pointer' }}>
              Read More →
            </p>
          </article>

          {/* Card 2 */}
          <article style={{ maxWidth: '300px', textAlign: 'center' }}>
            <Image
              src="/party.PNG" 
              alt="Birthday Event"
              width={494}
              height={403}

              layout="intrinsic"
              style={{ borderRadius: '20px',marginTop:'9064px',marginLeft:'602px' }}
            />
            <h3 style={{ fontWeight: '400', fontSize: '36px', marginTop: '9490px',marginLeft:'609px',width:'484px',height:'100px',fontFamily:'Jockey One',fontStyle:'Regular',lineHeight:'100%',letterSpacing:'0%',color:'#FFFFFF' }}>
              GET A 20% DISCOUNT AT OUR BIRTHDAY EVENT FOR RS 5000 SPEND
            </h3>
            <p style={{ fontSize: '24px', marginTop: '9671px',marginLeft:'641px',width:'159px',height:'36px',fontFamily:'Poppins',fontStyle:'Regular',lineHeight:'100%',letterSpacing:'0%', color: '#F2C211', cursor: 'pointer' }}>
              Read More →
            </p>
          </article>

          {/* Card 3 */}
          <article style={{ maxWidth: '300px', textAlign: 'center' }}>
            <Image
              src="/smoothie.PNG" 
              alt="Strawberry Smoothie"
              width={492}
              height={403}
              layout="intrinsic"
              style={{ borderRadius: '20px',marginTop:'9064px',marginLeft:'1133px', }}
            />
            <h3 style={{ fontWeight: '400', fontSize: '36px', marginTop: '9490px',marginLeft:'1149px',width:'467px',height:'100px',fontFamily:'Jockey One',fontStyle:'Regular',lineHeight:'100%',letterSpacing:'0%',color:'#FFFFFF'}}>
              STRAWBERRY SMOOTHIE IS THE BEST BEVERAGE FOR YOUR HOT DAY
            </h3>
            <p style={{ fontSize: '24px', marginTop: '9671px',marginLeft:'1172px',width:'159px',height:'36px',fontFamily:'Poppins',fontWeight:'400',fontStyle:'Regular',lineHeight:'100%',letterSpacing:'0%', color: '#F2C211', cursor: 'pointer' }}>
              Read More →
            </p>
          </article>
        </div>
      </section>

      {/* Subscribe Section */}
      <section
        style={{
          backgroundColor: '#000000',
          padding: '16px 8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          width:'289px',
          height:'69px',
          marginTop:'10034px',
          marginLeft:'1388',
        }}
      >
        <h3 style={{ color: '#000000', fontWeight: '400', width:'545px',height:'89px',marginTop:'9989px',marginLeft:'93px',fontFamily:'Jockey One',fontStyle:'Regular',fontSize:'64px',lineHeight:'100%',letterSpacing:'0%' }}>
          GET EXCLUSIVE UPDATE
          <br />
          <span style={{ fontWeight: '400', fontSize: '24px',width:'446px',height:'36px',marginTop:'10077px',marginLeft:'104px',fontFamily:'Poppins',fontStyle:'Regular',lineHeight:'100%',letterSpacing:'0%',color:'#FFFFFF' }}>
            *Stay ahead with the freshest scoop*
          </span>
        </h3>
        <input
          type="email"
          placeholder="Email"
          style={{
            padding: '10px',
            border: 'Rectangle40',
            borderRadius: '15px',
            flex: '1 1 200px',
            fontSize: '32px',
            fontWeight:'400',
            fontStyle:'Regular',
            fontFamily:'Poppins',
            outlineWidth:'598px',
            backgroundColor:'#D9D9D9',
            
          }}
        />
        <button
          style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            border: 'Rectangle41',
            padding: '16px 8px',
            fontWeight: '400',
            cursor: 'pointer',
            borderWidth:'289px',
            borderRadius:'15px',
            width:'184px',
            height:'36px',
            marginTop:'10051px',
            marginLeft:'1447px',
            fontFamily:'Poppins',
            fontStyle:'Regular',
            fontSize:'24px',
            lineHeight:'100%',
            letterSpacing:'0%',

          }}
        >
          Subscribe Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;
