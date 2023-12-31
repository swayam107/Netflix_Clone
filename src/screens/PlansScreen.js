import React, { useEffect, useState } from "react";
import "./PlansScreen.css";
import db from "../firebase1";
import { QuerySnapshot } from "firebase/firestore";

function PlansScreen() {

    const [product, setProducts] = useState([]);

    useEffect(() => {
        db.collection(`products`).where("active", "==", true)
        .get().then(QuerySnapshot => {
            const products = {};
            QuerySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection("prices").get();
                priceSnap.docs.forEach((price) => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data(),
                    }
                })
            })
        });
    }, [])

  return (
    <div className="plansScreen">
        PlansScreen
    </div>
  )
}

export default PlansScreen