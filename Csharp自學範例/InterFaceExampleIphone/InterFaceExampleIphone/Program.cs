using System;

namespace InterFaceExampleIphone
{
    class Program
    {
        static void Main(string[] args)
        {
            var user = new PhoneUser(new EricssonPhone());

            user.UsePhone();
        }
    }


    class PhoneUser
    {

        private Iphone _phone;

        public PhoneUser(Iphone phone)
        {
            _phone = phone;
        }
        public void UsePhone()
        {

            _phone.Dail();
            _phone.PickUp();
            _phone.Send();
            _phone.Receive();
        }
    


    }





    interface Iphone
    {

        void Dail();
        void PickUp();
        void Send();
        void Receive();


    }


    class NokiaPhone : Iphone
    {
        public void Dail()
        {
            Console.WriteLine("Nokia is calling");
        }

        public void PickUp()
        {
            Console.WriteLine("Hello");
        }

        public void Receive()
        {
            Console.WriteLine("Receive Message");
        }

        public void Send()
        {
            Console.WriteLine("Message");
        }
    }

    class EricssonPhone : Iphone
    {
        public void Dail()
        {
            Console.WriteLine("Ericsson is calling");

        }

        public void PickUp()
        {
            Console.WriteLine("E Hello");
        }

        public void Receive()
        {
            Console.WriteLine("E Receive Message");
        }

        public void Send()
        {
            Console.WriteLine("E Message");
        }
    }
}
