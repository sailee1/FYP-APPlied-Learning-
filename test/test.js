var chai = require ('chai')
var chaiHttp = require('chai-http')
var server = ('../app.js')
var should = require('chai').should();



chai.use(chaiHttp)

describe('Tests', function(){

it('should test the server end point', function(done){
    chai.request(server)
    .get('/')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
}); 

it('should test the user end point', function(done){
    chai.request(server)
    .get('/users')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
});   
    

it('should test the posts end point', function(done){
    chai.request(server)
    .get('/posts')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
});    
           
it('should test notes end point', function(done){
    chai.request(server)
    .get('/notes')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
 });        

it('should test the array chart end point', function(done){
    chai.request(server)
    .get('/arraychart')
    .end(function(err,res){
    chai.expect(200);
    done(); 
     })
});             
                
                
it('should test function function chart end point', function(done){
    chai.request(server)
    .get('/functionchart')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
}); 
    
it('should test array chart end point', function(done){
    chai.request(server)
    .get('/arraychart')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
}); 
                                
it('should test variable chart end point', function(done){
    chai.request(server)
    .get('/variablechart')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
});        

it('should test variables end point', function(done){
    chai.request(server)
    .get('/variables')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
});                           

it('should test functions end point', function(done){
    chai.request(server)
    .get('/functions')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
});                                   
                                    
it('should arrays end point', function(done){
    chai.request(server)
    .get('/arrays')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
}); 
                                                                                                                
it('should test quiz end point', function(done){
    chai.request(server)
    .get('/quiz')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
 });                                         
 
 it('should test function quiz end point', function(done){
    chai.request(server)
    .get('/functionquiz')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
}); 

it('should test variables quiz end point', function(done){
    chai.request(server)
    .get('/variablesquiz')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
});   
    
 it('should test array quiz end point', function(done){
    chai.request(server)
    .get('/arraysquiz')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })  
});  

    
it('should test end functions quiz end point', function(done){
    chai.request(server)
    .get('/endfunctions')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })      
 });
          
            
it('should test end arrays quiz end point', function(done){
    chai.request(server)
    .get('/endarrays')
    .end(function(err,res){
    chai.expect(200);
    done();             

})             
});
                

it('should test end variables quiz end point', function(done){
    chai.request(server)
    .get('/endvariables')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
    });   

it('should test results functions end point', function(done){
    chai.request(server)
    .get('/resultsfunctions')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
});  
  
it('should test results variables end point', function(done){
    chai.request(server)
    .get('/resultsvariables')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
});  
                      
it('should test results arrays end point', function(done){
    chai.request(server)
    .get('/resultsarrays')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
});  

it('should test todo end point', function(done){
    chai.request(server)
    .get('/todo')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
});  

it('should test lessons end point', function(done){
    chai.request(server)
    .get('/lessons')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
});  

it('should test graphs end point', function(done){
    chai.request(server)
    .get('/graphs')
    .end(function(err,res){
    chai.expect(200);
    done(); 
    })
});  
                           
})