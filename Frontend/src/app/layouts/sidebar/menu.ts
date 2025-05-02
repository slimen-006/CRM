
export const MENU = {
    adminMenu: [
      

        {
            id: 1,
            label: 'Compte Commerical',
            link: 'users/commercial',   

        },    
        {
            id: 2,
            label: 'Compte Client',  
            link: 'users/client',  

        },   
        {
            id: 3,
            label: 'Rendez-vous',  
            link: 'rendez-vous/rendez-admin',  

        },     
       
    ],

    
    Client: [
        {
            id: 1,
            label: "Rendez-vous",
            link: 'rendez-vous/rendez-client', 

        },

        {
            id: 2,
            label: "Suivi Contrat",
            link: 'contrat-client', 

        },
   
       
    
       

    ],
    Commercial: [
        {
            id: 1,
            label: "Suivi Rendez-vous",
            link: 'rendez-vous/rendez-commerical',

        },
        
      
        {
            id: 2,
            label: "Contrat",
            link: 'contrat/contrat-commercial',

        },

        {
            id: 3,
            label: "Contrat terminé.",
            link: 'contrat-terminé',

        },

     
        

    ],

   
};
