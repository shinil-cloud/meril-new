

frappe.ui.form.on('Salary Structure Assignment', {



    










    // refresh(frm) {


    //     if (frm.doc.employee && frm.doc.salary_structure) 
    //         {


            

            



                
    
    //         let salary_breakup = `
    //             <table class="table table-bordered small"> 
    //                 <thead> 
    //                     <tr> 
    //                         <th style="width: 16%">Salary Component (Earnings)</th> 
    //                         <th style="width: 16%" class="text-right">Monthly Amount</th> 
    //                         <th style="width: 16%" class="text-right">Annual Amount</th> 
    //                     </tr> 
    //                 </thead> 
    //                 <tbody id="salary_breakup_body">   
    //                 </tbody>
    //                 <tfoot>
    //                     <tr>
    //                         <th>Total</th>
    //                         <th id="total_monthly_earnings" class="text-right"></th>
    //                         <th id="total_annual_earnings" class="text-right"></th>
    //                     </tr>
    //                 </tfoot>
    //             </table>`;
        
    //         let deduction_breakup = `
    //             <table class="table table-bordered small"> 
    //                 <thead> 
    //                     <tr> 
    //                         <th style="width: 16%">Salary Component (Deduction)</th> 
    //                         <th style="width: 16%" class="text-right">Monthly Amount</th> 
    //                         <th style="width: 16%" class="text-right">Annual Amount</th> 
    //                     </tr> 
    //                 </thead> 
    //                 <tbody id="deduction_breakup_body">   
    //                 </tbody>
    //                 <tfoot>
    //                     <tr>
    //                         <th>Total</th>
    //                         <th id="total_monthly_deductions" class="text-right"></th>
    //                         <th id="total_annual_deductions" class="text-right"></th>
    //                     </tr>
    //                 </tfoot>
    //             </table>`;
        
    //         document.getElementById("ctc_preview").innerHTML = salary_breakup;
    //         document.getElementById("deduction_preview").innerHTML = deduction_breakup;
    
    //         let tableBody = document.getElementById("salary_breakup_body");
    //         let tableBody1 = document.getElementById("deduction_breakup_body");
    
    //         let totalMonthlyEarnings = 0;
    //         let totalAnnualEarnings = 0;
    
    //         let totalMonthlyDeductions = 0;
    //         let totalAnnualDeductions = 0;
    
    //         let array = [];
    //         $.each(frm.doc.custom_employee_reimbursements, function(i, component) {
    //             // console.log(component.reimbursements);
    //             array.push(component.reimbursements);
    
    //             // Add array elements to the salary_breakup_body
    //             let newRow = tableBody.insertRow();
    //             let componentCell = newRow.insertCell();
    //             componentCell.textContent = component.reimbursements;
    
    //             let amountCell = newRow.insertCell();
    //             amountCell.className = "text-right";
    //             amountCell.textContent = component.monthly_total_amount; // Assuming there is an 'amount' field in the component
    
    //             let annualAmountCell = newRow.insertCell();
    //             annualAmountCell.className = "text-right";
    //             annualAmountCell.textContent = component.monthly_total_amount * 12; // Assuming the 'amount' field is monthly
    
    //             totalMonthlyEarnings += component.monthly_total_amount;
    //             totalAnnualEarnings += component.monthly_total_amount * 12;
    //         });
    
    //         frappe.call({
    //             method: "hrms.payroll.doctype.salary_structure.salary_structure.make_salary_slip",
    //             args: {
    //                 source_name: "Meril 2024-2025",
    //                 employee: frm.doc.employee,
    //                 print_format: 'Salary Slip Standard for CTC',
                    
    //             },
    //             callback: function(response) {
    //                 console.log(response.message, 'iiiii');

              
        
    //                 $.each(response.message.earnings, function(i, v) {
    //                     console.log(v.salary_component)
    //                     console.log(v.amount)
    
    //                     frappe.call({
    //                         method: "frappe.client.get",
    //                         args: {
    //                             doctype: "Salary Component",
    //                             filters: { name: v.salary_component },
    //                             fields: ["name"]
    //                         },
    //                         callback: function(res) {
    //                             if (res.message && res.message.custom_is_part_of_ctc == 1) {
    //                                 // console.log(res.message.name);
        
    //                                 let newRow = tableBody.insertRow();
        
    //                                 let componentCell = newRow.insertCell();
    //                                 componentCell.textContent = res.message.name;
        
    //                                 let amountCell = newRow.insertCell();
    //                                 amountCell.className = "text-right";
    //                                 amountCell.textContent = v.amount;
        
    //                                 let annualAmountCell = newRow.insertCell();
    //                                 annualAmountCell.className = "text-right";
    //                                 annualAmountCell.textContent = v.amount * 12;
        
    //                                 totalMonthlyEarnings += v.amount;
    //                                 totalAnnualEarnings += v.amount * 12;
        
    //                                 document.getElementById("total_monthly_earnings").textContent = totalMonthlyEarnings;
    //                                 document.getElementById("total_annual_earnings").textContent = totalAnnualEarnings;
    //                             }
    //                         }
    //                     });
    //                 });

                    





        
    //                 $.each(response.message.deductions, function(i, k) {
    //                     frappe.call({
    //                         method: "frappe.client.get",
    //                         args: {
    //                             doctype: "Salary Component",
    //                             filters: { name: k.salary_component },
    //                             fields: ["name"]
    //                         },
    //                         callback: function(rem) {
    //                             if (rem.message && rem.message.custom_is_part_of_ctc == 1) {
    //                                 // console.log(rem.message.salary_component,"ppp")
    
    //                                 let newRow = tableBody1.insertRow();
        
    //                                 let componentCell = newRow.insertCell();
    //                                 componentCell.textContent = k.salary_component;
                                    
    //                                 let amountCell = newRow.insertCell();
    //                                 amountCell.className = "text-right";
    //                                 amountCell.textContent = k.amount;
                                    
    //                                 let annualAmountCell = newRow.insertCell();
    //                                 annualAmountCell.className = "text-right";
    //                                 annualAmountCell.textContent = k.amount * 12;
                                    
    //                                 totalMonthlyDeductions += k.amount;
    //                                 totalAnnualDeductions += k.amount * 12;
                                    
    //                                 document.getElementById("total_monthly_deductions").textContent = totalMonthlyDeductions;
    //                                 document.getElementById("total_annual_deductions").textContent = totalAnnualDeductions;
    //                             }
    //                         }
    //                     });
    //                 });


                    












    //             }
    //         });
    //     }

            
    // },
    























    // refresh(frm) {

    //     if(frm.doc.employee)
    //         {
    //             console.log(("yes"))

    //     let salary_breakup = `
    //         <table class="table table-bordered small"> 
    //             <thead> 
    //                 <tr> 
    //                     <th style="width: 16%">Salary Component (Earnings)</th> 
    //                     <th style="width: 16%" class="text-right">Monthly Amount</th> 
    //                     <th style="width: 16%" class="text-right">Annual Amount</th> 
    //                 </tr> 
    //             </thead> 
    //             <tbody id="salary_breakup_body">   
    //             </tbody>
    //             <tfoot>
    //                 <tr>
    //                     <th>Total</th>
    //                     <th id="total_monthly_earnings" class="text-right"></th>
    //                     <th id="total_annual_earnings" class="text-right"></th>
    //                 </tr>
    //             </tfoot>
    //         </table>`;
    
    //     let deduction_breakup = `
    //         <table class="table table-bordered small"> 
    //             <thead> 
    //                 <tr> 
    //                     <th style="width: 16%">Salary Component (Deduction)</th> 
    //                     <th style="width: 16%" class="text-right">Monthly Amount</th> 
    //                     <th style="width: 16%" class="text-right">Annual Amount</th> 
    //                 </tr> 
    //             </thead> 
    //             <tbody id="deduction_breakup_body">   
    //             </tbody>
    //             <tfoot>
    //                 <tr>
    //                     <th>Total</th>
    //                     <th id="total_monthly_deductions" class="text-right"></th>
    //                     <th id="total_annual_deductions" class="text-right"></th>
    //                 </tr>
    //             </tfoot>
    //         </table>`;
    
    //     document.getElementById("ctc_preview").innerHTML = salary_breakup;
    //     document.getElementById("deduction_preview").innerHTML = deduction_breakup;

        

    //     array=[]
    //     $.each(frm.doc.custom_employee_reimbursements,function(i,component)
    //     {
    //         console.log(component.reimbursements)

    //         array.push(component.reimbursements)
            
    //     })
    
    //     frappe.call({
    //         method: "hrms.payroll.doctype.salary_structure.salary_structure.make_salary_slip",
    //         args: {
    //             source_name: 'Meril Original Salary Structure',
    //             employee: frm.doc.employee,
    //             print_format: 'Salary Slip Standard for CTC'
    //         },
    //         callback: function(response) {
    //             // console.log(response.message, 'iiiii');
    
    //             let tableBody = document.getElementById("salary_breakup_body");
    //             let tableBody1 = document.getElementById("deduction_breakup_body");
    
    //             let totalMonthlyEarnings = 0;
    //             let totalAnnualEarnings = 0;
    
    //             let totalMonthlyDeductions = 0;
    //             let totalAnnualDeductions = 0;
    
    //             $.each(response.message.earnings, function(i, v) {

    //                 // console.log(v.salary_component)

    //                 frappe.call({
    //                     method: "frappe.client.get",
    //                     args: {
    //                         doctype: "Salary Component",
    //                         filters: { name: v.salary_component },
    //                         fields: ["name"]
    //                     },
    //                     callback: function(res) {
    //                         if (res.message && res.message.custom_is_part_of_ctc == 1) {
    //                             // console.log(res.message.name);
    
    //                             let newRow = tableBody.insertRow();
    
    //                             let componentCell = newRow.insertCell();
    //                             componentCell.textContent = res.message.name;
    
    //                             let amountCell = newRow.insertCell();
    //                             amountCell.className = "text-right";
    //                             amountCell.textContent = v.amount;
    
    //                             let annualAmountCell = newRow.insertCell();
    //                             annualAmountCell.className = "text-right";
    //                             annualAmountCell.textContent = v.amount * 12;
    
    //                             totalMonthlyEarnings += v.amount;
    //                             totalAnnualEarnings += v.amount * 12;
    
    //                             document.getElementById("total_monthly_earnings").textContent = totalMonthlyEarnings;
    //                             document.getElementById("total_annual_earnings").textContent = totalAnnualEarnings;
    //                         }
    //                     }
    //                 });
    //             });
    
    //             $.each(response.message.deductions, function(i, k) {


    //                         frappe.call({
    //                                         method: "frappe.client.get",
    //                                         args: {
    //                                             doctype: "Salary Component",
    //                                             filters: { name: k.salary_component },
    //                                             fields: ["name"]
    //                                         },
    //                                         callback: function(rem) {
    //                                             if (rem.message && rem.message.custom_is_part_of_ctc == 1) {
                    
    //                                                 // console.log(rem.message.salary_component,"ppp")
                    
                    
    //                                                 let newRow = tableBody1.insertRow();
    
    //                                             let componentCell = newRow.insertCell();
    //                                             componentCell.textContent = k.salary_component;
                                
    //                                             let amountCell = newRow.insertCell();
    //                                             amountCell.className = "text-right";
    //                                             amountCell.textContent = k.amount;
                                
    //                                             let annualAmountCell = newRow.insertCell();
    //                                             annualAmountCell.className = "text-right";
    //                                             annualAmountCell.textContent = k.amount * 12;
                                
    //                                             totalMonthlyDeductions += k.amount;
    //                                             totalAnnualDeductions += k.amount * 12;
                                
    //                                             document.getElementById("total_monthly_deductions").textContent = totalMonthlyDeductions;
    //                                             document.getElementById("total_annual_deductions").textContent = totalAnnualDeductions;
                    
                    
    //                                             }
    //                                         }
    //                                     })
                    








                    
    //             });
    //         }
    //     });

    // }
    // },
    












    // refresh(frm) {
    //     let salary_breakup = `
    //         <table class="table table-bordered small"> 
    //             <thead> 
    //                 <tr> 
    //                     <th style="width: 16%">Salary Component (Earnings)</th> 
    //                     <th style="width: 16%" class="text-right">Monthly Amount</th> 
    //                     <th style="width: 16%" class="text-right">Annual Amount</th> 
    //                 </tr> 
    //             </thead> 
    //             <tbody id="salary_breakup_body">   
    //             </tbody> 
    //         </table>`;
    
    //     let deduction_breakup = `
    //         <table class="table table-bordered small"> 
    //             <thead> 
    //                 <tr> 
    //                     <th style="width: 16%">Salary Component (Deduction)</th> 
    //                     <th style="width: 16%" class="text-right">Monthly Amount</th> 
    //                     <th style="width: 16%" class="text-right">Annual Amount</th> 
    //                 </tr> 
    //             </thead> 
    //             <tbody id="deduction_breakup_body">   
    //             </tbody> 
    //         </table>`;
    
    //     document.getElementById("ctc_preview").innerHTML = salary_breakup;
    //     document.getElementById("deduction_preview").innerHTML = deduction_breakup;
    
    //     frappe.call({
    //         method: "hrms.payroll.doctype.salary_structure.salary_structure.make_salary_slip",
    //         args: {
    //             source_name: 'Meril Original Salary Structure',
    //             employee: frm.doc.employee,
    //             print_format: 'Salary Slip Standard for CTC'
    //         },
    //         callback: function(response) {
    //             // console.log(response.message, 'iiiii');
    
    //             let tableBody = document.getElementById("salary_breakup_body");
    //             let tableBody1 = document.getElementById("deduction_breakup_body");
    
    //             $.each(response.message.earnings, function(i, v) {
    //                 frappe.call({
    //                     method: "frappe.client.get",
    //                     args: {
    //                         doctype: "Salary Component",
    //                         filters: { name: v.salary_component },
    //                         fields: ["name"]
    //                     },
    //                     callback: function(res) {
    //                         if (res.message && res.message.custom_is_part_of_ctc == 1) {
    //                             // console.log(res.message.name);
    
    //                             let newRow = tableBody.insertRow();
    
    //                             let componentCell = newRow.insertCell();
    //                             componentCell.textContent = res.message.name;
    
    //                             let amountCell = newRow.insertCell();
    //                             amountCell.className = "text-right";
    //                             amountCell.textContent = v.amount;
    
    //                             let annualAmountCell = newRow.insertCell();
    //                             annualAmountCell.className = "text-right";
    //                             annualAmountCell.textContent = v.amount * 12;
    //                         }
    //                     }
    //                 });
    //             });
    
    //             $.each(response.message.deductions, function(i, k) {


    //                 frappe.call({
    //                     method: "frappe.client.get",
    //                     args: {
    //                         doctype: "Salary Component",
    //                         filters: { name: k.salary_component },
    //                         fields: ["name"]
    //                     },
    //                     callback: function(rem) {
    //                         if (rem.message && rem.message.custom_is_part_of_ctc == 1) {

    //                             console.log(rem.message.salary_component,"ppp")


    //                             let newRow = tableBody1.insertRow();
    
    //                             let componentCell = newRow.insertCell();
    //                             componentCell.textContent = k.salary_component;
                
    //                             let amountCell = newRow.insertCell();
    //                             amountCell.className = "text-right";
    //                             amountCell.textContent = k.amount;
                
    //                             let annualAmountCell = newRow.insertCell();
    //                             annualAmountCell.className = "text-right";
    //                             annualAmountCell.textContent = k.amount * 12;


    //                         }
    //                     }
    //                 })




                    




    //             });
    //         }
    //     });
    // },
    











    







    custom_nps_percentage(frm) {


        
    if (frm.doc.custom_is_nps==1 )
    
    {
    
            if(frm.doc.custom_nps_percentage <= 10) 
            {


                


            
                
                    var amount = (frm.doc.base / 12 * 35) / 100;
                    
                    
                    
                    var nps_value=(amount*frm.doc.custom_nps_percentage)/100
                    console.log(nps_value,"ppp")
                    frm.set_value("custom_nps_amount",nps_value)
                
            }
    
            else
            {
                msgprint("you cant put percentage greater than 10")
               
                frm.set_value("custom_nps_amount",undefined)
            }
    
    }
},



custom_cubic_capacity_of_company(frm)
{
    
   
    
        if(frm.doc.custom_cubic_capacity_of_company=="Car < 1600 CC" )
        {
            frm.set_value("custom_car_perquisite_as_per_rules",1800)
            console.log('2222')
            
        }
        
        else if (frm.doc.custom_cubic_capacity_of_company=="Car > 1600 CC")
        {
            
             frm.set_value("custom_car_perquisite_as_per_rules",2400)

             console.log('333')
            
        }
    

},


custom_driver_provided_by_company(frm)
{
    if(frm.doc.custom_driver_provided_by_company==1)
    {
        frm.set_value("custom_driver_perquisite_as_per_rules",900)
    }
    else
    {
        frm.set_value("custom_driver_perquisite_as_per_rules",undefined) 
    }
},


custom__car_perquisite(frm)
{
    if (frm.doc.custom__car_perquisite==1)
        {
            if(frm.doc.custom_cubic_capacity_of_company=="Car > 1600 CC")
                {
                   
                    frm.set_value("custom_car_perquisite_as_per_rules",2400)
                }
            
        }

        else
        {
            frm.set_value("custom_car_perquisite_as_per_rules",undefined)

        }
},








// custom_nps_amount(frm) 
// {
//         if (frm.doc.custom_is_nps == 1 && frm.doc.custom_nps_amount) {
            
         
//                 var amount = (frm.doc.base / 12 * 35) / 100;
                  
//                 var nps_value=(amount*10)/100
//                 console.log(nps_value,"pp")
                
//                 if(frm.doc.custom_nps_amount>nps_value)
//                 {
//                     msgprint("You cant enter amount greater than "+nps_value)
//                     frm.set_value("custom_nps_amount",undefined)
//                     frm.set_value("custom_nps_percentage",undefined)
                    
//                 }
                
//                 // else
//                 // {
                    
                    
//                 //     // if(frm.doc.custom_nps_amount<=nps_value)
//                 //     // {
                       
                        
                    
//                 //     //     // frm.set_value("custom_nps_percent",10)
//                 //     // }
 
//                 // }
                
//             }
        
//     },

})

