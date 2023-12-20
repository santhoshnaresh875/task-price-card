import logo from './logo.svg';
import './App.css';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
 
  const planDetail = [
    {
      Name: "FREE",
      pack: 0,
      features: [
        {
          access: "Single User",
          value: true,
        },
        {
          access: "5GB Storage ",
          value: true,
        },
        {
          access: "Unlimited Public Projects",
          value: true,
        },
        {
          access: "Community Access",
          value: true,
        },
        {
          access: "Unlimited Private Projects",
          value: false,
        },
        {
          access: "Dedicated Phone Support",
          value: false,
        },
        {
          access: "Free Subdomain",
          value: false,
        },
        {
          access: "Monthly Status Reports",
          value: false,
        }
      ]
    },
    {
      Name: "PLUS",
      pack: 9,
      features: [
        {
          access: "5 Users",
          value: true,
        },
        {
          access: "50GB Storage",
          value: true,
        },
        {
          access: "Unlimited Public Projects",
          value: true,
        },
        {
          access: "Community Access",
          value: true,
        },
        {
          access: "Unlimited Private Projects",
          value: true,
        },
        {
          access: "Dedicated Phone Support",
          value: true,
        },
        {
          access: "Free Subdomain",
          value: true,
        },
        {
          access: "Monthly Status Reports",
          value: false,
        }
      ]
    },
    {
      Name: "PRO",
      pack: 49,
      features: [
        {
          access: "Unlimited Users",
          value: true,
        },
        {
          access: "50GB Storage",
          value: true,
        },
        {
          access: "Unlimited Public Projects",
          value: true,
        },
        {
          access: "Community Access",
          value: true,
        },
        {
          access: "unlimited Private Projects",
          value: true,
        },
        {
          access: "Dedicated Phone Support",
          value: true,
        },
        {
          access: "Free Subdomain",
          value: true,

        },
        {
          access: "Monthly Status Reports",
          value: true,
        }
      ]
    }
  ];

  return (<section class="pricing py-5">
  <div class="container">
    <div class="row">
      
    
    
       {planDetail.map((detail) => {
        return <Card details={detail} />;
      })}
    
    
    
   
    </div>
</div>

  
</section>
       
        
         
    
    
  );
}

export default App;
