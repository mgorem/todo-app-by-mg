import { useState, useEffect, useContext, useRef } from "react";
import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChange,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
