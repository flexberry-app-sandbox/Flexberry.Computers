﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Computers
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Person.
    /// </summary>
    //  *** Start programmer edit section *** (Person CustomAttributes)

    //  *** End programmer edit section *** (Person CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("PersonE", new string[] {
            "Name as \'Name\'",
            "Phone as \'Phone\'"})]
    [View("PersonL", new string[] {
            "Name as \'Name\'",
            "Phone as \'Phone\'"})]
    public class Person : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private string fPhone;
        
        //  *** Start programmer edit section *** (Person CustomMembers)

        //  *** End programmer edit section *** (Person CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        //  *** Start programmer edit section *** (Person.Name CustomAttributes)

        //  *** End programmer edit section *** (Person.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                //  *** Start programmer edit section *** (Person.Name Get start)

                //  *** End programmer edit section *** (Person.Name Get start)
                string result = this.fName;
                //  *** Start programmer edit section *** (Person.Name Get end)

                //  *** End programmer edit section *** (Person.Name Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Person.Name Set start)

                //  *** End programmer edit section *** (Person.Name Set start)
                this.fName = value;
                //  *** Start programmer edit section *** (Person.Name Set end)

                //  *** End programmer edit section *** (Person.Name Set end)
            }
        }
        
        /// <summary>
        /// Phone.
        /// </summary>
        //  *** Start programmer edit section *** (Person.Phone CustomAttributes)

        //  *** End programmer edit section *** (Person.Phone CustomAttributes)
        [StrLen(255)]
        public virtual string Phone
        {
            get
            {
                //  *** Start programmer edit section *** (Person.Phone Get start)

                //  *** End programmer edit section *** (Person.Phone Get start)
                string result = this.fPhone;
                //  *** Start programmer edit section *** (Person.Phone Get end)

                //  *** End programmer edit section *** (Person.Phone Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Person.Phone Set start)

                //  *** End programmer edit section *** (Person.Phone Set start)
                this.fPhone = value;
                //  *** Start programmer edit section *** (Person.Phone Set end)

                //  *** End programmer edit section *** (Person.Phone Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "PersonE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PersonE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PersonE", typeof(IIS.Computers.Person));
                }
            }
            
            /// <summary>
            /// "PersonL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PersonL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PersonL", typeof(IIS.Computers.Person));
                }
            }
        }
    }
}
