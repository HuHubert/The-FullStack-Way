using System;

namespace overWrite
{
    class Program
    {
        static void Main(string[] args)
        {
            Vehicle v = new Car();
            v.Run();
            Console.WriteLine(v.Speed); 
            
        }
    }



    class Vehicle
    {
        private int _speed;


        public virtual int Speed
        {

            get { return _speed; }
            set { _speed = value; }

        }


        public virtual void Run()
        {
            Console.WriteLine("I'm Running");

            _speed = 100;
        }
    }




    class Car : Vehicle
    {
        private int _rpm;

        public override int Speed {

            get { return _rpm / 100; }


            set { _rpm = value * 100; }

        }

        public override void Run()
        {

            Console.WriteLine("Car is running");

            _rpm = 5000;

        }
    }



    class RaceCar : Car
    {
        public override void Run() {


            Console.WriteLine("Racecar is running"); 

        }



    }
}
