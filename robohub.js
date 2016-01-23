/**
 * Created by nasty on 23.01.2016.
 */

// level - 1
north();
north();


// level - 2
for (var step = 0; step < 16; step++)
    east();

// level - 3
for (step = 0; step < 7; step++) {
    south();
    east();
}

// level - 4
for (step = 0; step < 13; step++) {
    if (isFree("east")==true) east();
    else south();
}


// level - 5

while (isFree("east")) {
    east ();
}
while (isFree("south")||(isFree("west"))) {
    if (isFree("south")) {
        south ();
    }
    else {
        west ();
    }
}
while (isFree("north")||(isFree("west"))) {
    if (isFree("north")) {
        north ();
    }
    else {
        west ();
    }
}
while (isFree("south")||(isFree("east"))) {
    if (isFree("south")) {
        south ();
    }
    else {
        east ();
    }
}