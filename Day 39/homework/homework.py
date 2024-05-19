from turtle import *


#we want to paint house

#step 1: draw a house
speed(50)
penup()
goto(-100, -100)
pendown()
pensize(3)
color("chocolate", "orange") # (stroke, fill)
begin_fill()
for i in range(4):

    forward(170)
    left(90)
end_fill()

#chimney
penup()
goto(20, 130)
pendown()
color("brown", "firebrick")
begin_fill()
for i in range(2):
    forward(40)
    left(90)
    forward(100)
    left(90)
end_fill()

#roof
penup()
goto(-127, 70)
pendown()
color("brown", "firebrick")
begin_fill()
for i in range(3):
    forward(225)
    left(120)
end_fill()

#window 1
penup()
goto(0, 0)
pendown()
color("black","white")
begin_fill()
for i in range(4):
    forward(50)
    left(90)
end_fill()

#window 1 horizontal line
penup()
goto(0, 25)
pendown()
color("black")
forward(50)

#window 1 veritical line
penup()
goto(25, 0)
pendown()
left(90)
forward(50)

#window 2
penup()
goto(-80, 0)
right(90)
pendown()
color("black","white")
begin_fill()
for i in range(4):
    forward(50)
    left(90)
end_fill()

#window 2 horizontal line
penup()
goto(-80, 25)
pendown()
color("black")
forward(50)

#window 2 veritical line
penup()
goto(-55, 0)
pendown()
left(90)
forward(50)

#door
penup()
goto(-40, -98)
pendown()
right(90)
color("darkred", "red")
begin_fill()
for i in range(2):
    forward(50)
    left(90)
    forward(80)
    left(90)
end_fill()

#door hand
penup()
goto(-30, -60)
pendown()
color("black")
begin_fill()
circle(5)
end_fill()

hideturtle()
exitonclick()