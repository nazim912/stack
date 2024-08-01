/*

Conception d'une Pile en TypeScript

Dans cet exercice, vous explorerez le concept de pile (stack) en programmation en concevant une implémentation basique 
d'une pile en TypeScript. Une pile est une structure de données linéaire qui obéit à la règle du 
"dernier entré, premier sorti" (LIFO - Last In, First Out).


L'objectif de cet exercice est de créer une classe Stack qui représente une pile. 
La pile doit être capable d'effectuer les opérations de base d'une pile, 
- push() pour ajouter un élément au sommet de la pile
- pop() pour supprimer un élément du sommet de la pile
- isEmpty() pour vérifier si la pile est vide
- peek() pour voir l'élément au sommet de la pile sans le supprimer.

*/

class StackNo<T> {

    constructor(value: T) {
    }
}

class Stac<T> {

    constructor() {
    }

    // Ajoute un nouvel élément au sommet de la pile
    push(value: T): void {
    }

    // Supprime et retourne l'élément au sommet de la pile
    pop(): T | undefined {
        return undefined;
    }

    // Vérifie si la pile est vide
    isEmpty(): boolean {
        return true;
    }

    // Retourne l'élément au sommet de la pile sans le supprimer
    peek(): T | undefined {
        return undefined;
    }

    display(): string {
        let res : string = "";
        return res;
    }
}

// Exemple d'utilisation :
const stac = new Stack<number>();

