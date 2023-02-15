 class visibilityStudent{
        //These variables are only accessed through a gatekeeper method or if the main method is inside the class
        private String name;
        private String cohort;

     public visibilityStudent(String name, String cohort) {
        this.name = name;
        this.cohort = cohort;
     }

     //If we want to access and modify private the values of a private variables of a class, we need to go through getters and setters
     //A getter
//     public String getName(String name){
//         return this.name;
//     }
//     public void setName(String name){
//         this.name = name;
//     }
     //A setter

        public void changeStudentName(String studentName){
            if(studentName.isEmpty()){
                this.name = "";
                this.cohort = "";
            }else{
                this.name = studentName;
            }
        }

    }
