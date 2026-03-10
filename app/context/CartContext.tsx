"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";
import { CartState, Product } from "@/lib/types";

type CartAction =
    | { type: "ADD_ITEM"; product: Product }
    | { type: "REMOVE_ITEM"; id: number }
    | { type: "CLEAR_CART" };

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "ADD_ITEM": {
            const existing = state.items.find((i) => i.id === action.product.id);
            if (existing) {
                return {
                    items: state.items.map((i) =>
                        i.id === action.product.id
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    ),
                };
            }
            return {
                items: [...state.items, { ...action.product, quantity: 1 }],
            };
        }
        case "REMOVE_ITEM":
            return { items: state.items.filter((i) => i.id !== action.id) };
        case "CLEAR_CART":
            return { items: [] };
        default:
            return state;
    }
}

interface CartContextType {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });
    return (
        <CartContext.Provider value= {{ state, dispatch }}>
            { children }
        </CartContext.Provider>
  );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
}