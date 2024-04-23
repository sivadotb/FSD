

import './App.css'
import Card from './components/Card.jsx'

const dispObject = (obj) => {
  console.log(obj)
}
function App() {
  const planData = { 
                    'plans': 
                            [
                              {
                                'name':'Free'
                                ,'price' : 0
                                ,'currency' : '$'
                                ,'billing_cycle' : 'month'
                                , 'users_count':'Single User'
                                ,'storage':'50GB Storage'
                                ,'public_projects':{
                                      'count':'Unlimited Public Projects','enabled':true
                                    }
                                ,'access_type':'Community Access'
                                ,'private_projects':{'count':'Unlimited Private Projects','enabled':false}
                                ,'support_models':[
                                  {
                                    'support_type':'Dedicated Phone Support'
                                    ,'enabled':false
                                  }
                                ]
                                ,'domains_allowed':[
                                  {
                                    'domain_type':'Free Subdomain'
                                    ,'enabled':false
                                  }
                                ]
                                ,'reports':[
                                  {
                                    'report_type':'Monthly Status Reports'
                                    ,'enabled':false
                                  }
                                ]
                              }
                              ,{
                                'name':'Plus'
                                ,'price' : 9
                                ,'currency' : '$'
                                ,'billing_cycle' : 'month'
                                , 'users_count':'5 Users'
                                ,'storage':'50GB Storage'
                                ,'public_projects':{'count':'Unlimited Public Projects','enabled':true}
                                ,'access_type':'Community Access'
                                ,'private_projects':{'count':'Unlimited Private Projects','enabled':true}
                                ,'support_models':[
                                  {
                                    'support_type':'Dedicated Phone Support'
                                    ,'enabled':true
                                  }
                                ]
                                ,'domains_allowed':[
                                  {
                                    'domain_type':'Free Subdomain'
                                    ,'enabled':true
                                  }
                                ]
                                ,'reports':[
                                  {
                                    'report_type':'Monthly Status Reports'
                                    ,'enabled':false
                                  }
                                ]
                              }
                              ,{
                                'name':'Pro'
                                ,'price' : 49
                                ,'currency' : '$'
                                ,'billing_cycle' : 'month'
                                , 'users_count':'5 Users'
                                ,'storage':'50GB Storage'
                                ,'public_projects':{'count':'Unlimited Public Projects','enabled':true}
                                ,'access_type':'Community Access'
                                ,'private_projects':{'count':'Unlimited Private Projects','enabled':true}
                                ,'support_models':[
                                  {
                                    'support_type':'Dedicated Phone Support'
                                    ,'enabled':true
                                  }
                                ]
                                ,'domains_allowed':[
                                  {
                                    'domain_type':'Free Subdomain'
                                    ,'enabled':true
                                  }
                                ]
                                ,'reports':[
                                  {
                                    'report_type':'Monthly Status Reports'
                                    ,'enabled':true
                                  }
                                ]
                              } 
                            ]   
                }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
              {planData.plans.map(Card)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
