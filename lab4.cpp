#include <iostream>
#include <math.h>
#include <stdio.h>
using namespace std;
double eps = 1e-11;
double f (double x, char caz = 'a')
{
    double vf;
    switch(caz)
    {
        case 'a':
             vf = x+7;
            break;
        case 'b':
            vf = x*x +10;
            break;
        case 'c':
            vf = x*x*x + 10;
            break;
        case 'd':
            vf = sin(x)/x;
            break;
        default:
            return 0;
            break;
    }
    return vf;
}
double df2 (double x, char caz = 'a')
{
    double vf;
    switch(caz)
    {
        case 'a':
             vf = 0;
            break;
        case 'b':
            vf = 2;
            break;
        case 'c':
            vf = 6*x;
            break;
        default:
            return 0;
            break;
    }
    return vf;
}
double Newton(double a, double b, char caz)
{
    return (b-a) + (f(a, caz)/8 +3*f((2*a+b)/3,caz) + +f((a+2*b)/3, caz))/8;
}
double NewtonGenerala(double a, double b, char caz)
{
    return 1;
}
double Runge(double a, double b, int &n, char caz)
{
    int i;
    double h, S0, S, x;
    n =1;
    h = b-a;
    S0 = Newton(a,b,caz);
    do
    {
        S0 = S;
        h /= 2;
        n *= 2;
        S = 0;
        x = a;
        for(i=0; i<n; i++)
        {
            S = S + Newton(x,x+h,caz);
            x += h;
        }
    }while(fabs(S-S0) > eps);
    return S;
}
int main()
{
    int k, i, n;
    double a = 1, b = 5, S0, S, I, R;
    cout << "Proiect Nr 4 elaborat de Adam Denis" << endl;

    // caz a
    S = Newton(a,b,'a');
    printf("\n a). Val. aprox. a integralei care coincide cu valoarea exacta: %16.12lf", S);
     // caz b
    S = Newton(a,b,'b');
    R = pow(b-a, 3) * df2(3, 'b')/12;
    I = S - R;
    printf("\n \tb). Val. aprox. a integralei: %16.12lf", S);
    printf("\n \tb). Val. termenului de rest: %16.12lf", R);
    printf("\n \tb). Val. exacta: %16.12lf", I);
     // caz c
    S = Newton(a,b,'c');
    R = pow(b-a, 3) * df2(3, 'c')/12;
    I = S - R;
    printf("\n \tc). Val. aprox. a integralei: %16.12lf", S);
     printf("\n \tc). Val. max a termenului de rest: %16.12lf", R);
    printf("\n \tc). Val. exacta: %16.12lf < = I <= %16.12lf", I, S);

     // caz d
    S = Runge(a,b,k,'c');
    printf("\n \td). Val. aprox. a integralei: S %d = %16.12lf",k, S);
    return 0;
}
