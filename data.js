const games = {
    "1": [
        {
            actions: "1. h4 Kc4 \n2. h5 Kd5 \n3. h6 Ke6 \n4. h7 Kf7 \n5. h8=Q",
            initialBoard: "8/8/8/8/8/1k5P/8/2K5 w - - 0 1"
        }
    ],
    "10": [
        {
            actions: "1. Kb3  Kc5 \n2. Kc3  Kd5 \n3. Kd3  Ke5 \n4. Ke3  Kf5 \n5. Kf3  Kg5 \n6. Kg3  Kf5 \n7. Kh4  Kf6 \n8. Kh5  Kg7 \n9. Kg5  Kf7 \n10. Kh6 Kg8 \n11. Kg6",
            initialBoard: "8/8/8/1k6/8/K7/6P1/8 w - - 0 1"
        },
        {
            actions: "1. g4    Kc5 \n2. g5    Kd5\n3. g6    Ke6\n4. g7    Kf7\n5. g8=Q Kxg8",
            comment: "Pawn is lost  leaving a draw.",
            initialBoard: "8/8/8/1k6/8/K7/6P1/8 w - - 0 1"
        },
        {
            actions: "1. Kb3    Kc5\n2. Kc3    Kd5\n3. Kd3    Ke5\n4. Ke3    Kf5\n5. Kf3    Kg5\n6. Kg3    Kf5\n7. Kh4    Kf6\n8. Kh5    Kf5\n9. g4+    Kf6\n10. Kh6      Kf7\n11. g5    Kf8\n12. Kh7",
            comment: "White wins",
            initialBoard: "8/8/8/1k6/8/K7/6P1/8 w - - 0 1"
        },
        {
            actions: "1. Kb3    Kc5\n2. Kc3    Kd5\n3. Kd3    Ke5\n4. Ke3    Kf5\n5. Kf3    Kg5\n6. Kg3    Kf5\n7. Kh4    Kf6\n8. Kh5    Kf5\n9. g4+    Kf6\n10. Kh6      Kf7\n11. g5    Kf8\n12. Kh7 ",
            comment: "White wins again.",
            initialBoard: "8/8/8/1k6/8/K7/6P1/8 w - - 0 1"
        },
        {
            actions: "1. Kb3    Kc5\n2. Kc3    Kd5\n3. Kd3    Ke5\n4. Ke3    Kf5\n5. Kf3    Kg5\n6. Kg3    Kf5\n7. Kh4    Kf6\n8. Kh5    Kf5\n9. g4+    Kf6\n10. Kh6      Kf7\n11. g5    Kg8\n12. Kg6 ",
            comment: "White wins.",
            initialBoard: "8/8/8/1k6/8/K7/6P1/8 w - - 0 1"
        },
        {
            actions: "1. Kb3 Kc5\n2. Kc3 Kd5\n3. Kd3 Ke5\n4. Ke3 Kf5\n5. Kf3 Kg5\n6. Kg3 Kf5\n7. Kh4 Kf6\n8. Kh5 Kg7\n9. Kg5 Kf7\n10. Kh6 Kf6\n11. g4 Kf7\n12. g5",
            comment: "White wins again.",
            initialBoard: "8/8/8/1k6/8/K7/6P1/8 w - - 0 1"
        }
    ],
    "100": [
        {
            actions: "1. c6 dxc6 \n2. Kc5  Bc8 \n3. a7 Bb7 \n4. Kd6  Kf7 \n5. Kc7  Ba8 \n6. Kb8 ",
            initialBoard: "6k1/3p4/P4P2/2P5/1K6/7b/8/8 w - - 0 1"
        },
        {
            actions: "1. c6        dxc6\n2. a7        c5+\n3. Kxc5    Bg2",
            comment: "and Black draws.",
            initialBoard: "6k1/3p4/P4P2/2P5/1K6/7b/8/8 w - - 0 1"
        },
        {
            actions: "1. c6        dxc6\n2. Kc5    Bc8\n3. a7        Bb7\n4. Kd6          Ba8\n5. Ke7           c5\n6. f7+",
            comment: "Pawn Queening assures the win.",
            initialBoard: "6k1/3p4/P4P2/2P5/1K6/7b/8/8 w - - 0 1"
        }
    ],
    "101": [
        {
            actions: "1. c7 Rd6+ \n2. Kb5  Rd5+ \n3. Kb4  Rd4+ \n4. Kb3  Rd3+ \n5. Kc2  Rd4 \n6. c8=R!  Ra4 \n7. Kb3 ",
            initialBoard: "8/8/1KP5/3r4/8/8/8/k7 w - - 0 1"
        },
        {
            actions: "1. c7        Rd6+\n2. Kb7        Rd7 ",
            comment: "followed by capturing  the pinned Pawn draws. ",
            initialBoard: "8/8/1KP5/3r4/8/8/8/k7 w - - 0 1"
        },
        {
            actions: "1. c7        Rd6+\n2. Kc5        Rd1 \n3. Kc6         Rc1+",
            comment: "after capture of the skewered  Pawn, draws. ",
            initialBoard: "8/8/1KP5/3r4/8/8/8/k7 w - - 0 1"
        },
        {
            actions: "1. c7        d6+\n2. Kb5        Rd5+\n3. Kb4        Rd4+\n4. Kb3        Rd3+\n5. Kc2        Rd4\n6. c8=Q     Rc4+!\n7. Qxc4",
            comment: "Black draws by stalemate.",
            initialBoard: "8/8/1KP5/3r4/8/8/8/k7 w - - 0 1"
        },
        {
            actions: "1. c7        Rd6+\n2. Kb5        Rd5+\n3. Kb4        Rd4+\n4. Kb3        Rd3+\n5. Kc2        Rd4\n6. c8=R!   ",
            comment: "White threatens to  mate with 7 Ra8+.",
            initialBoard: "8/8/1KP5/3r4/8/8/8/k7 w - - 0 1"
        }
    ],
    "102": [
        {
            actions: "1. Kf7  Rf2+ \n2. Ke6  Re2+ \n3. Kf5  Rf2+ \n4. Ke4  Re2+ \n5. Kf4! Re8 \n6. Kg5  Kc7 \n7. Kh6  Kd7 \n8. Kh7  Ke7 \n9. g8=Q ",
            initialBoard: "6K1/1k4P1/6P1/8/8/8/r7/8 w - - 0 1"
        },
        {
            actions: "1. Kf7        Ra8\n2.g8=Q     Rxg8\n3. Kxg8",
            comment: "and remaining Pawn becomes a Queen.",
            initialBoard: "6K1/1k4P1/6P1/8/8/8/r7/8 w - - 0 1"
        },
        {
            actions: "1. Kf7         Rf2+\n2. Ke6        Re2+\n3. Kf5         Re8\n4. Kf6        Kc7\n5. Kf7        Kd7\n6. g8=Q",
            comment: "wins for White.",
            initialBoard: "6K1/1k4P1/6P1/8/8/8/r7/8 w - - 0 1"
        },
        {
            actions: "1. Kf7         Rf2+\n2. Ke6       Re2+\n3. Kf5         Re8\n4. Ke4        Re2+\n5. Kf3        Re8\n6. Kf4        Rg8\n7. Kf5        Rxg7",
            comment: "Rook gives up his life for the second Pawn,  draws for Black.",
            initialBoard: "6K1/1k4P1/6P1/8/8/8/r7/8 w - - 0 1"
        }
    ],
    "103": [
        {
            actions: "1. Kc1  a3 \n2. Nc2+ Ka2 \n3. Nd4  Ka1 \n4. Kc2  Ka2 \n5. Ne2  Ka1 \n6. Nc1  a2 \n7. Nb3# ",
            initialBoard: "8/8/8/8/pN6/8/2K5/k7 w - - 0 1"
        },
        {
            actions: "1. Kcl        a3\n2. Nc2+         Ka2\n3. Nd4        Ka1\n4. Kc2        a2\n5. Nb3#",
            comment: "",
            initialBoard: "8/8/8/8/pN6/8/2K5/k7 w - - 0 1"
        }
    ],
    "104": [
        {
            actions: "1. Nc5  Kd2 \n2. Na4! Kd3 \n3. Kg2  Kc4 \n4. Kf3  Kb3 \n5. Ke4  Kxa4 \n6. Kd5  Kb5 \n7. c4+  Kb6 \n8. Kd6  Kb7 \n9. c5 Kc8 \n10. Kc6! ",
            initialBoard: "8/3N4/8/8/8/2P1k3/8/7K w - - 0 1"
        },
        {
            actions: "1. Nc5        Kd2\n2. Ne4+         Ke3",
            comment: "would threaten to capture the Knight and then the Pawn.",
            initialBoard: "8/3N4/8/8/8/2P1k3/8/7K w - - 0 1"
        }
    ],
    "105": [
        {
            actions: "1. Kd3  Ka1 \n2. Na4! Kb1 \n3. Kd2  Ka1 \n4. Kc1  Kxa2 \n5. Kc2  Ka1 \n6. Nc5  Ka2 \n7. Nd3  Ka1 \n8. Nc1  a2 \n9. Nb3# ",
            initialBoard: "8/8/8/8/2K5/p1N5/Pk6/8 w - - 0 1"
        },
        {
            actions: "1. Kb4        Ka1\n2. Kxa3",
            comment: "is a draw by stalemate.",
            initialBoard: "8/8/8/8/2K5/p1N5/Pk6/8 w - - 0 1"
        }
    ],
    "106": [
        {
            actions: "1. Na2! Kf8 \n2. Kf6! Kg8 \n3. Kg6  Kh8 \n4. Nb4  Kg8 \n5. h7+  Kh8 \n6. Nc6  a2 \n7. Nd8  a1=Q \n8. Nf7# ",
            initialBoard: "8/5k2/7P/6K1/1N6/p7/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf5        Kg8\n2. Kg6        Kh8\n3. h7        a2\n4. Nxa2",
            comment: "stalemate.",
            initialBoard: "8/5k2/7P/6K1/1N6/p7/8/8 w - - 0 1"
        }
    ],
    "107": [
        {
            actions: "1. h3 Kg3 \n2. Ng5  Kf4 \n3. Ne4  Kf3 \n4. Kd4  Kf4 \n5. Kd5  Kf5 \n6. Nc3! Kf4 \n7. Ne2+ Kf3 \n8. Ng1+ Kg2 \n9. Ke4  Kxg1 \n10. Kf3 Kh2 \n11. Kg4 Kg2 \n12. Kxh4  Kf3 \n13. Kg5 Ke4 \n14. h4  Ke5 \n15. h5  Ke6 \n16. Kg6 ",
            initialBoard: "8/8/4N3/8/7p/3K1k2/7P/8 w - - 0 1"
        },
        {
            actions: "1. Ng5+     Kg4",
            comment: "\tdraws easily.",
            initialBoard: "8/8/4N3/8/7p/3K1k2/7P/8 w - - 0 1"
        },
        {
            actions: "1. h3         Kg3\n2. Ng5        Kf4\n3. Ne4        Kf3\n4. Kd4        Kg2\n5. Ng5        Kg3\n6. Ke3        Kg2\n7. Kf4        Kf2\n8. Kg4",
            comment: "\tand White wins.",
            initialBoard: "8/8/4N3/8/7p/3K1k2/7P/8 w - - 0 1"
        },
        {
            actions: "1. h3        Kg3\n2.  Ng5        Kf4\n3.  Ne4        Kf3\n4. Kd4        Kf4\n5. Kd5        Kf5\n6. Nf2        Kf4\n7. Ke6        Kg3\n8. Kf5        Kxf2\n9. Kg4        Ke3\n10. Kxh4     Kf4\n11. Kh5        Kf5\n12. Kh6        Kf6\n13. Kh7        Kf7\n14. h4        Kf8\n15. h5        Kf7\n16. h6        Kf8\n17. Kg6 ",
            comment: "allowing Black to  reach g8 and a draw.",
            initialBoard: "8/8/4N3/8/7p/3K1k2/7P/8 w - - 0 1"
        }
    ],
    "108": [
        {
            actions: "1. Ng2! hxg3+ \n2. Kg1  h5 \n3. Kh1  h4 \n4. Nf4# ",
            initialBoard: "8/8/7p/8/6pp/4N1Pk/5K2/8 w - - 0 1"
        },
        {
            actions: "1. Ng2!        Kh2\n2. Nxh4     Kh3\n3. Nf5        h5\n4. Kgl        h4\n5. gxh4",
            comment: "Rook Pawn marches \tup the board to Queen.",
            initialBoard: "8/8/7p/8/6pp/4N1Pk/5K2/8 w - - 0 1"
        }
    ],
    "109": [
        {
            actions: "1. Kd7! Kd5 \n2. Kc7  Bc6 \n3. Ne4! Kxe4 \n4. Kxc6",
            initialBoard: "b3K3/8/3P4/4k1N1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. d7        Bc6\n2. Kd8         Bxd7",
            comment: "draws the position.",
            initialBoard: "b3K3/8/3P4/4k1N1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd7!        Kd5\n2. Kc7        Bc6\n3. Ne4!        Kxe4\n4. Kxc6",
            comment: "and the Pawn Queens.",
            initialBoard: "b3K3/8/3P4/4k1N1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd7!        Kd5\n2. Kc7        Bc6\n3. Ne4!        Be8\n4. Nf6+",
            comment: "winning the Bishop and the game.",
            initialBoard: "b3K3/8/3P4/4k1N1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd7!        Kd5\n2. Kc7        Bc6\n3. Ne4!        Bb5\n4. Nc3+     Kc5\n5. Nxb5          Kxb5\n6. d7",
            comment: "White winning.",
            initialBoard: "b3K3/8/3P4/4k1N1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd7!        Kd5\n2. Kc7        Bc6\n3. Ne4!        Ba4\n4. Nc3+     Ke5\n5. Nxa4",
            comment: "White wins Bishop \tand game.",
            initialBoard: "b3K3/8/3P4/4k1N1/8/8/8/8 w - - 0 1"
        }
    ],
    "11": [
        {
            actions: "1. Kb7! Kd7 \n2. a4 Kd6 \n3. a5 Kc5 \n4. a6",
            initialBoard: "3k4/8/K7/8/8/8/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kb6    Kc8\n2. a4    Kb8\n3. a5    Ka8\n4. a6    Kb8\n5. a7+    Ka8\n6. Ka6",
            comment: "\tBlack is stalemated.",
            initialBoard: "3k4/8/K7/8/8/8/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kb6    Kc8\n2. Ka7    Kc7\n3. a4    Kc8\n4. a5    Kc7\n5. a6    Kc8\n6. Ka8    Kc7\n7. a7    Kc8",
            comment: "\tWhite is stalemated.",
            initialBoard: "3k4/8/K7/8/8/8/P7/8 w - - 0 1"
        }
    ],
    "110": [
        {
            actions: "1. Nf5  Ba8 \n2. Nd4+ Kc5 \n3. Ne6+ Kc6 \n4. Nc7  Bb7 \n5. Nd5!",
            initialBoard: "8/Kb6/1Pk5/8/7N/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nf5        Bc8\n2. Ne7+    Kd7\n3. Nxc8        ",
            comment: "wins for White.",
            initialBoard: "8/Kb6/1Pk5/8/7N/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nf5        Ba8\n2. Nd4+     Kc5\n3. Ne6+         Kb5\n4. Nc7+",
            comment: "White wins",
            initialBoard: "8/Kb6/1Pk5/8/7N/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nf5        Ba8\n2. Nd4+    Kc5\n3. Ne6+        Kc6\n4. Nc7        Bb7\n5. Nd5!        Kxd5\n6. Kxb7",
            comment: "\twins for White.",
            initialBoard: "8/Kb6/1Pk5/8/7N/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nf5        Ba8\n2. Nd4+    Kc5\n3. Ne6+        Kc6\n4. Nc7        Bb7\n5. Nd5!        Bc8\n6. Ne7+     Kd7\n7. Nxc8         Kxc8\n8. b7+",
            comment: "compels resignation and. White wins",
            initialBoard: "8/Kb6/1Pk5/8/7N/8/8/8 w - - 0 1"
        }
    ],
    "111": [
        {
            actions: "1. Nc6  Bf1 \n2. b6 Ba6 \n3. Kd6  Bb7 \n4. Kc7  Ba8 \n5. Nd8  Ke3 \n6. Nb7  Kd4 \n7. Kb8  Kd5 \n8. Kxa8 Kc6 \n9. Ka7 ",
            initialBoard: "8/8/8/1PK5/3N4/8/5kb1/8 w - - 0 1"
        },
        {
            actions: "1. Nc6        Bf1\n2. b6        Ba6\n3. Kd6        Ke3\n4. Kc7        Ke4\n5. Nb4",
            comment: "Bishop is evicted  enabling the Pawn  to advance next move.",
            initialBoard: "8/8/8/1PK5/3N4/8/5kb1/8 w - - 0 1"
        },
        {
            actions: "1. Nc6        Bf1\n2. b6        Ba6\n3. Kd6        Bb7\n4. Kc7        Ba8\n5. Nd8        Bf3\n6. Nc6",
            comment: "Pawn Queens in two more moves.",
            initialBoard: "8/8/8/1PK5/3N4/8/5kb1/8 w - - 0 1"
        }
    ],
    "112": [
        {
            actions: "1. Na5  Ba8 \n2. Kc8! Kd6 \n3. Kb8  Kd7 \n4. Nb7  Kc6 \n5. Kxa8 Kc7 \n6. Nd6! Kxd6 \n7. Kb7",
            initialBoard: "8/P1K1k3/8/8/2N5/5b2/8/8 w - - 0 1"
        },
        {
            actions: "1. Kb8          Kd8\n2. Na5          Ba8!\n3. Kxa8     Kc7\n4. Nc4          Kc8\n5. Nd6+       Kc7\n6. Nb5+       Kc8",
            comment: "fails due to the fact  that the Knight cannot gain a move.",
            initialBoard: "8/P1K1k3/8/8/2N5/5b2/8/8 w - - 0 1"
        },
        {
            actions: "1. Na5           Ba8\n2. Kb8           Kd8\n3. Nb7+     Kd7\n4. Kxa8     Kc8\n5. Nd6+       Kc\n6. Ne8+        Kc8",
            comment: "and the stubborn  King cannot be ousted-- a draw.",
            initialBoard: "8/P1K1k3/8/8/2N5/5b2/8/8 w - - 0 1"
        }
    ],
    "113": [
        {
            actions: "1. Nb7+ Kb4 \n2. Nd6  Be3 \n3. Nc8  Bf4 \n4. Nb6! Kc5 \n5. Nd5! ",
            initialBoard: "8/3PK3/8/N1k5/5b2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nb7+           Kc6\n2. Nd8+     Kc5\n3. Ne6+\n1. Nb7+           Kc6\n2. Nd8+     Kb5\n3. Ne6          Bg3\n4. Kf6           Bh4+\n5. Ng5 ",
            comment: "\tcosts the Bishop.  \t \t113VAR-3 White wins.",
            initialBoard: "8/3PK3/8/N1k5/5b2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nb7+          Kc4\n2. Nd6+     Kd5\n3. Kf6!         Bg3\n4. Kg5",
            comment: "White wins with a beautiful variation.",
            initialBoard: "8/3PK3/8/N1k5/5b2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nb7+          Kb6\n2. d8=Q+",
            comment: "White wins.",
            initialBoard: "8/3PK3/8/N1k5/5b2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nb7+     Kb4\n2. Nd6         Bg5+\n3. Ke8       Bf6\n4. Nf5        Bg5\n5. Ne7",
            comment: "blocking the Bishop's  action on the diagonal.",
            initialBoard: "8/3PK3/8/N1k5/5b2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nb7+     Kb4\n2. Nd6           Be3\n3. Nc8           Bf4\n4. Nb6!           Bc7\n5. Nd5+",
            comment: "winning the Bishop.",
            initialBoard: "8/3PK3/8/N1k5/5b2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nb7+     Kb4\n2. Nd6        Be3\n3. Nc8        Bf4\n4. Nb6!        Bg5+\n5. Ke8        Kb5\n6. Nc8       Bf6\n7. Ne7",
            comment: "shuts the Bishop out.",
            initialBoard: "8/3PK3/8/N1k5/5b2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nb7+     Kb4\n2. Nd6        Be3\n3. Nc8        Bf4\n4. Nb6!        Kc5\n5. Nd5!         Kxd5\n6. d8=Q+",
            comment: "emphasize Pawn  Queens with check.",
            initialBoard: "8/3PK3/8/N1k5/5b2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nb7+     Kb4\n2. Nd6        Be3\n3. Nc8        Bf4\n4. Nb6!        Kc5\n5. Nd5!        Bg5+\n6. Nf6",
            comment: "\tis decisive.",
            initialBoard: "8/3PK3/8/N1k5/5b2/8/8/8 w - - 0 1"
        }
    ],
    "114": [
        {
            actions: "1. Ng7+!   Nxg7 \n2. h6   Kf7 \n3. h7",
            initialBoard: "4k3/8/4N3/5n1P/8/8/8/K7 w - - 0 1"
        },
        {
            actions: "1. Ng7+!    Kf7\n2. Nxf5        Kf6\n3. h6 ",
            comment: "wins for White. ",
            initialBoard: "4k3/8/4N3/5n1P/8/8/8/K7 w - - 0 1"
        },
        {
            actions: "1. Ng7+!    Nxg7\n2. h6        Kf7\n3. hxg7        Kxg7",
            comment: "drawing is fit \tretribution.",
            initialBoard: "4k3/8/4N3/5n1P/8/8/8/K7 w - - 0 1"
        }
    ],
    "115": [
        {
            actions: "1. Nd2  Kg7 \n2. Nc4  Nb1 \n3. Kd4! Kf7 \n4. b5 Ke7 \n5. b6 Kd7 \n6. Kc5  Nc3 \n7. Ne5+ Kc8 \n8. Kc6  Ne2 \n9. b7+  Kb8 \n10. Kb6 ",
            initialBoard: "8/7k/8/2K5/1P2N3/n7/8/8 w - - 0 1"
        },
        {
            actions: "1. Nd2        Kg7\n2. Nc4        Nc2\n3. b5        Ne1\n4. b6        Nd3+\n5. Kb5    Nf4\n6. b7 ",
            comment: "leaves Black helpless so far from the action.",
            initialBoard: "8/7k/8/2K5/1P2N3/n7/8/8 w - - 0 1"
        },
        {
            actions: "1. Nd2        Kg7\n2. Nc4        Nb1\n3. b5        Nc3\n4. b6        Na4+\n5. Kc6        Nxb6",
            comment: "Knights capture is a bloody draw.",
            initialBoard: "8/7k/8/2K5/1P2N3/n7/8/8 w - - 0 1"
        },
        {
            actions: "1. Nd2        Kg7\n2. Nc4        Nb1\n3. Kd4!        Kf7\n4. b5        Ke7\n5. b6        Kd7\n6. Kc5        Nc3\n7. Ne5+        Ke6\n8. b7        Na4+\n9. Kb4 ",
            comment: "White wins.",
            initialBoard: "8/7k/8/2K5/1P2N3/n7/8/8 w - - 0 1"
        }
    ],
    "116": [
        {
            actions: "1. Ka7! Kb5 \n2. Nb4! Ka5 \n3. Kb8  Nc6+ \n4. Kb7  Nd8+ \n5. Kc7  Ne6+ \n6. Kb8  Nc5 \n7. a7 Nd7+ \n8. Kc7  Nb6 \n9. Kb7  Kb5 \n10. Nd5",
            initialBoard: "K2n4/8/P7/8/2k5/8/2N5/8 w - - 0 1"
        },
        {
            actions: "1. Kb8        Kb5\n2. a7        Nc6+",
            comment: "wins the Pawn ",
            initialBoard: "K2n4/8/P7/8/2k5/8/2N5/8 w - - 0 1"
        },
        {
            actions: "1. Kb8        Kb5\n2. Nb4         Nc6+\n3. Kc7        Nxb4\n4. a7         Nd5+\n5. Kc8          Nb6\n1. Kb8        Kb5\n2. Nb4         Nc6+\n3. Kb7         Na5+\n4. Ka7        Kxb4\n5. Kb6        Nc4+\n6. Kc7        Ka5\n7. a7        Nb6",
            comment: "draws \t \t116VAR-3 \tand Black draws.",
            initialBoard: "K2n4/8/P7/8/2k5/8/2N5/8 w - - 0 1"
        },
        {
            actions: "1. Ka7!        Nc6+\n2. Kb6        Ne7\n3. Kb7        ",
            comment: "White wins with un- challenged Pawn.",
            initialBoard: "K2n4/8/P7/8/2k5/8/2N5/8 w - - 0 1"
        }
    ],
    "117": [
        {
            actions: "1. Ne6  Kd5 \n2. Nf8  Ne5 \n3. Ka8  Nc6 \n4. Nd7  Ke6 \n5. Nb6  Kd6 \n6. Nc8+ Kc7 \n7. Na7  Nb8 \n8. Nb5+ Kb6 \n9. Kxb8 ",
            initialBoard: "8/KP1n4/2k5/8/5N2/8/8/8 w - - 0 1"
        }
    ],
    "118": [
        {
            actions: "1. Nf6  Na8! \n2. Nd5! Kd7 \n3. Kb7  Kd8 \n4. Nb6  Nc7 \n5. Kc6 ",
            initialBoard: "1K6/P7/1nk5/8/4N3/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nf6        Nd7+\n2. Ka8        Nb6+\n3. Kb8        Nd7+\n4. Kc8        Nb6+",
            comment: "\tetc., Black has a clever defense  against perpetual check with:",
            initialBoard: "1K6/P7/1nk5/8/4N3/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nf6        Kc5\n2. Kb7        Kb5\n3. Nd5 ",
            comment: "evicts the Knight from holding  back the Pawn and wins.",
            initialBoard: "1K6/P7/1nk5/8/4N3/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nf6        Na8!\n2. Kxa8        Kc7\n3. Nd5+    Kc8\n4. Ne7+    Kc7",
            comment: "and Black draws.",
            initialBoard: "1K6/P7/1nk5/8/4N3/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nf6        Na8!\n2. Nd5!        Kd7\n3. Kxa8    Kc8",
            comment: "another Black draw.",
            initialBoard: "1K6/P7/1nk5/8/4N3/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nf6        Na8!\n2. Nd5!        Kd7\n3. Kb7        Kd6\n4. Kxa8    Kxd5\n5. Kb8",
            comment: "White winning.",
            initialBoard: "1K6/P7/1nk5/8/4N3/8/8/8 w - - 0 1"
        }
    ],
    "119": [
        {
            actions: "1. Kg5! Ka7 \n2. Kf5! Kb6 \n3. Nd7+!  Nxd7 \n4. e6 Nc5 \n5. e7 Nb7 \n6. Ke5 ",
            initialBoard: "k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf5        Ka7!\n2. Nd7        Nxd7\n3. e6        Nb6\n4. e7        Nc8\n5. e8=Q    Nd6+",
            comment: "Black wins the Queen. ",
            initialBoard: "k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf5        Ka7\n2. Kf6        Kb6   \n3. Kg7        Kxc5\n4. Kxf8        Kd5",
            comment: "Black captures the  Pawn and draws. ",
            initialBoard: "k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf5        Ka7\n2. Kg5        Kb6\n3. Nd7+    Nxd7\n4. e6        Nc5\n5. e7        Ne6+\n6. Kf6        Nc7",
            comment: "Pawn can never  move on to Queen.",
            initialBoard: "k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kg5!        Ka7 \n2. Kh6         Kb6\n3. Kg7        Kxc5 draws. ",
            comment: "",
            initialBoard: "k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kg5!        Ka7 \n2. Kh6         Kb6\n3. Nd7+    Nxd7\n4. e6        Nf6\n5. e7        Ng8+",
            comment: "and Black draws.",
            initialBoard: "k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kg5!        Ka7 \n2. Kh6         Kb6\n3. Nd7+    Nxd7\n4. e6        Nf6\n5. Kg6         Nd5",
            comment: "and Black draws again.",
            initialBoard: "k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kg5!        Ka7\n2. Kf5!        Kb8\n3. Kf6        Nh7+\n4. Kg6        Nf8+\n5. Kg7",
            comment: "Knight is magnificently \ttrapped. ",
            initialBoard: "k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1"
        },
        {
            actions: "2. Kf5!        Kb8\n3. Kf6        Kc8\n4. Kg7        Nd7\n5. Nxd7    Kxd7\n6. Kf7",
            comment: "\tKg5!        Ka7 the Pawn will Queen.",
            initialBoard: "k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kg5!        Ka7\n2. Kf5!        Kb6\n3. Nd7+!    Nxd7\n4. e6        Kb7\n5. e7        Kc7\n6. e8=Q",
            comment: "White wins.",
            initialBoard: "k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kg5!        Ka7\n2. Kf5!        Kb6\n3. Nd7+!    Nxd7\n4. e6        Nc5\n5. e7        Nb7\n6. e8=Q    Nd6+",
            comment: "removes the Queen.",
            initialBoard: "k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1"
        }
    ],
    "12": [
        {
            actions: "1. Kf4      Kg7 \n2. Kf5      Kh8 \n3. Kg5      Kg7 \n4. h8=Q+! Kxh8 \n5. Kf6      Kg8 \n6. g7     Kh7 \n7. Kf7 ",
            initialBoard: "7k/7P/6P1/8/8/6K1/8/8 w - - 0 1"
        },
        {
            actions: "1.  Kf 4    Kg7\n2.  Kf5    Kh8\n3. Ke6    Kg7\n4. Kd7    Kh8",
            comment: "King must not come any closer -- stalemate.",
            initialBoard: "7k/7P/6P1/8/8/6K1/8/8 w - - 0 1"
        }
    ],
    "120": [
        {
            actions: "1. f6 Nf2+ \n2. Kg2  Nd3 \n3. f7 Nf4+ \n4. Kh2  Ng6 \n5. Nf3+ Kg4 \n6. Ne5+!  Nxe5 \n7. f8=Q ",
            initialBoard: "8/8/8/5P1p/3N3k/8/8/3n3K w - - 0 1"
        },
        {
            actions: "",
            comment: " ",
            initialBoard: "8/8/8/5P1p/3N3k/8/8/3n3K w - - 0 1"
        }
    ],
    "121": [
        {
            actions: "1. f5 Ne3 \n2. f6 Nf5 \n3. f7 Ne7+ \n4. Kb7  Ng6 \n5. Nxe5 Nf8 \n6. Nc6#!",
            initialBoard: "8/8/2K5/kp2p3/p4P2/3N4/8/3n4 w - - 0 1"
        },
        {
            actions: "1. f5        Ne3\n2. f6        Nf5\n3. f7        Ne7+\n4. Kb7        Ng6\n5. Nxe5        Nxe5\n6. f8=Q",
            comment: "and White wins.",
            initialBoard: "8/8/2K5/kp2p3/p4P2/3N4/8/3n4 w - - 0 1"
        },
        {
            actions: "1. f5        Ne3\n2. f6        Nf5\n3. f7        Ne7+\n4. Kb7        Ng6\n5. Nxe5        a3\n6. Nxg6    a7\n7. f8=Q        a1=Q\n8. Qa8+",
            comment: "Black's Queen is removed.",
            initialBoard: "8/8/2K5/kp2p3/p4P2/3N4/8/3n4 w - - 0 1"
        },
        {
            actions: "1. f5        Ne3\n2. f6        Nf5\n3. f7        Ne7+\n4. Kb7        Ng6\n5. Nxe5        Nf8\n6. Nc6#!    ",
            comment: "",
            initialBoard: "8/8/2K5/kp2p3/p4P2/3N4/8/3n4 w - - 0 1"
        }
    ],
    "122": [
        {
            actions: "1. bxa7 Rb3+ \n2. Kc7  Rc3+ \n3. Kd7  Rd3+ \n4. Ke7  Re3+ \n5. Kf7  Rf3+ \n6. Kg7  Rg3+ \n7. Ng5! Rxg5+ \n8. Kf7  Rf5+ \n9. Ke7  Re5+ \n10. Kd7 Rd5+ \n11. Kc7 Rc5+ \n12. Kb7 Rb5+ \n13. Kc6! ",
            initialBoard: "8/pK6/pP6/8/8/r6N/8/5k2 w - - 0 1"
        },
        {
            actions: "1. bxa7        Rb3+\n2. Kc7        Rc3+\n3. Kd8        Rxh3",
            comment: "White does not dare  Queen his Pawn.",
            initialBoard: "8/pK6/pP6/8/8/r6N/8/5k2 w - - 0 1"
        }
    ],
    "123": [
        {
            actions: "1. Nd6  Kg8 \n2. Ne8  Kh8 \n3. Nf6! gxf6 \n4. Kf7  f5 \n5. g7+  Kh7 \n6. g8=Q# ",
            initialBoard: "7k/4K1p1/6Pp/5N1P/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nxh6    gxh6\n2. Kf6        Kg8\n3. g7        Kh7\n4. Kf7",
            comment: "stalemates Black.  ",
            initialBoard: "7k/4K1p1/6Pp/5N1P/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Nxh6    gxh6\n2. Kf6        Kg8\n3. g7        Kh7\n4. g8=Q+    Kxg8\n5. Kg6",
            comment: "and White can win the remaining Pawn. ",
            initialBoard: "7k/4K1p1/6Pp/5N1P/8/8/8/8 w - - 0 1"
        }
    ],
    "124": [
        {
            actions: "1. Nb4+!   axb4 \n2. e7  d2 \n3. e8=Q  d1=Q \n4. Qc6+    Ka5 \n5. Kb7!  Qd3 \n6. Qb6+  Ka4 \n7. Qa7+  Kb5 \n8. Qa6+",
            initialBoard: "1K6/5p2/k3P3/p7/8/3p4/P1N5/8 w - - 0 1"
        },
        {
            actions: "1. Nb4+!    axb4\n2. e7        d2\n3. e8=Q        d1=Q\n4. Qc6+        Ka5\n5. Kb7!        b3\n6. a3           Qd3\n7. Qc5+        Ka4\n8. Qb4#",
            comment: "",
            initialBoard: "1K6/5p2/k3P3/p7/8/3p4/P1N5/8 w - - 0 1"
        }
    ],
    "125": [
        {
            actions: "1. b7 Nd6+ \n2. Kd4! Nxb7 \n3. Kd5  Kg7 \n4. Nd8! Nxd8 \n5. e7 ",
            initialBoard: "2n5/8/1PN1Pk2/8/4K3/8/8/8 w - - 0 1"
        },
        {
            actions: "1. b7        Nd6+\n2. Kd5        Nxb7\n3. e7        Kf7",
            comment: "Black has a draw.",
            initialBoard: "2n5/8/1PN1Pk2/8/4K3/8/8/8 w - - 0 1"
        },
        {
            actions: "1. b7        Nd6+\n2. Kd4!        Nxb7\n3. Kd5        Nc5\n4. e7        Na6\n5. e8=Q        Nc7+",
            comment: "winning the Queen. ",
            initialBoard: "2n5/8/1PN1Pk2/8/4K3/8/8/8 w - - 0 1"
        },
        {
            actions: "1. b7                 Nd6+\n2. Kd4!        Nxb7\n3. Kd5        Nc5\n4. e7        Na6\n5. Kd6         Kf7\n6. Nd8+    Ke8\n7. Ne6        Kf7\n8. Ng7        Nc7\n9. Kd7        Kf6\n10. Ne8+    Nxe8\n11. Kxe8",
            comment: "\tand White wins.",
            initialBoard: "2n5/8/1PN1Pk2/8/4K3/8/8/8 w - - 0 1"
        }
    ],
    "126": [
        {
            actions: "1. Ke7  Nh7 \n2. Kf7  Kg5 \n3. Ne4+ Kxh5 \n4. Kg7  Ng5 \n5. Nf6#",
            initialBoard: "5n2/8/3K4/2N2k1P/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1. Ke7        Kg5\n2. Kxf8        Kxh5\n3. Kg7        Kg4\n4. Ne4        Kf3\n5. Kg6        Kg4\n6. Kf6        Kf3\n7. Kf5",
            comment: "and White wins.",
            initialBoard: "5n2/8/3K4/2N2k1P/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1. Ke7        Nf7\n2. Kf7        Nf6\n3. h6        Ke5\n4. Nd7+",
            comment: "White wins. ",
            initialBoard: "5n2/8/3K4/2N2k1P/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1. Ke7        Nh7\n3. h6        Kg5\n4. Ne4+        Nxe4\n5. h7",
            comment: "\t2 Kf7        Nf6 wins for White.",
            initialBoard: "5n2/8/3K4/2N2k1P/8/6P1/8/8 w - - 0 1"
        }
    ],
    "127": [
        {
            actions: "1. g6 Kf6 \n2. g7 Kf7 \n3. Nd5  Ne6 \n4. Ne7  Nxg7 \n5. h7! ",
            initialBoard: "5n2/8/7P/4k1P1/p4N2/8/5K2/8 w - - 0 1"
        },
        {
            actions: "1. g6          Kf6\n2. g7          Kf7\n3. Nd5          Kg8\n4. Nf6          Kf7\n5. g8=Q+ ",
            comment: "",
            initialBoard: "5n2/8/7P/4k1P1/p4N2/8/5K2/8 w - - 0 1"
        },
        {
            actions: "1. g6        Kf6\n2. g7        Kf7\n3. Nd5        Nd7\n4. Ne7        Nf6\n5. g8=Q+    Nxg8\n6. h7",
            comment: "and White Queens and wins.",
            initialBoard: "5n2/8/7P/4k1P1/p4N2/8/5K2/8 w - - 0 1"
        },
        {
            actions: "1. g6        Kf6\n2. g7        Kf7\n3. Nd5        h7\n4. Ne7        Nf6\n5. g8=Q+    Nxg8\n6. h7",
            comment: "\tand White wins.",
            initialBoard: "5n2/8/7P/4k1P1/p4N2/8/5K2/8 w - - 0 1"
        },
        {
            actions: "1. g6        Kf6\n2. g7        Kf7\n3. Nd5        Ng6\n4. Nf6        Ne7\n5. g8=Q+    Nxg8\n6. h7",
            comment: "White wins again.",
            initialBoard: "5n2/8/7P/4k1P1/p4N2/8/5K2/8 w - - 0 1"
        }
    ],
    "128": [
        {
            actions: "1. Nd4+ Kb7 \n2. Kxh2 Ka6 \n3. Nb3    Bf4+ \n4. Kh3    Kb5 \n5. Kg4    Bb8 \n6. f4   Kb4 \n7. f5   Kxb3 \n8. f6   Kb4 \n9. f7   Bd6 \n10. a6 ",
            initialBoard: "8/8/2k4b/P7/8/8/2N2PKp/8 w - - 0 1"
        },
        {
            actions: "1. Nd4+     Kc5\n2. Kh1!        Bf8\n3. Ne6+",
            comment: "wins the Bishop.",
            initialBoard: "8/8/2k4b/P7/8/8/2N2PKp/8 w - - 0 1"
        },
        {
            actions: "1. Nd4+     Kc5\n2. Kh1!        Bg7\n3. Ne6+ ",
            comment: "wins the Bishop.",
            initialBoard: "8/8/2k4b/P7/8/8/2N2PKp/8 w - - 0 1"
        },
        {
            actions: "1. Nd4+     Kc5\n2. Kh1!        Bg5\n3. Ne6+",
            comment: "wins the Bishop.",
            initialBoard: "8/8/2k4b/P7/8/8/2N2PKp/8 w - - 0 1"
        },
        {
            actions: "1. Nd4+     Kc5\n2. Kh1!        Bf4\n3. Ne6+",
            comment: "wins the Bishop.",
            initialBoard: "8/8/2k4b/P7/8/8/2N2PKp/8 w - - 0 1"
        },
        {
            actions: "1. Nd4+     Kc5\n2. Kh1!        Bd2\n3. Nb3+",
            comment: "wins the Bishop.",
            initialBoard: "8/8/2k4b/P7/8/8/2N2PKp/8 w - - 0 1"
        },
        {
            actions: "1. Nd4+     Kc5\n2. Kh1!        Bc1\n3. Nb3+",
            comment: "wins the Bishop.",
            initialBoard: "8/8/2k4b/P7/8/8/2N2PKp/8 w - - 0 1"
        },
        {
            actions: "1. Nd4+     Kc5\n2. Kh1!        Kd6\n3. Nf5+",
            comment: "wins the Bishop.",
            initialBoard: "8/8/2k4b/P7/8/8/2N2PKp/8 w - - 0 1"
        },
        {
            actions: "1. Nd4+     Kc5\n2. Kh1!        Kd5\n3. a6",
            comment: "passed Pawn becomes  a Queen.",
            initialBoard: "8/8/2k4b/P7/8/8/2N2PKp/8 w - - 0 1"
        }
    ],
    "129": [
        {
            actions: "1. c6 dxc6 \n2. a6 Bf3 \n3. Ng5  Bd5 \n4. Ne6  c5 \n5. Nc7+ Kd7 \n6. Nxd5 Kc8 \n7. Nb6+ Kb8 \n8. Nd7+ Ka7 \n9. Nxc5 ",
            initialBoard: "4k3/3p1N2/8/P1P4b/8/8/7K/8 w - - 0 1"
        },
        {
            actions: "1. c6        dxc6\n2. a6              c5\n3. Ne5",
            comment: "prevents Bishop from  getting on the diagonal with 4 Nc6!.",
            initialBoard: "4k3/3p1N2/8/P1P4b/8/8/7K/8 w - - 0 1"
        },
        {
            actions: "1. c6        dxc6\n2. a6              Bf3\n3. Ng5              Bd5\n4. Ne6                  Kd7\n5. Nc5+    Kc7\n6. a7",
            comment: "\tleaves Bishop helpless and Pawn Queens.",
            initialBoard: "4k3/3p1N2/8/P1P4b/8/8/7K/8 w - - 0 1"
        },
        {
            actions: "1. c6        dxc6\n2. a6              Bf3\n3. Ng5              Bd5\n4. Ne6                  c5\n5. Nc7+        Kd7\n6. Nxd5        Kc6\n7. Kg2        c4\n8. Kf2        c3\n9. Ke3",
            comment: "White overtakes the Pawn.",
            initialBoard: "4k3/3p1N2/8/P1P4b/8/8/7K/8 w - - 0 1"
        },
        {
            actions: "1. c6        dxc6\n2. a6              Bf3\n3. Ng5              Bd5\n4. Ne6                  c5\n5. Nc7+        Kd7\n6. Nxd5        Kc8\n7. Nb6+        Kc7\n8. a7",
            comment: "followed by Queening.",
            initialBoard: "4k3/3p1N2/8/P1P4b/8/8/7K/8 w - - 0 1"
        }
    ],
    "13": [
        {
            actions: "1. g7 Kh7 \n2. g8=Q+! Kxg8 \n3. Kg6  Kh8 \n4. Kf7  Kh7 \n5. g6+  Kh8 \n6. g7+",
            initialBoard: "6k1/8/5KP1/6P1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. g7    Kh7\n2. Kf7",
            comment: "allows a draw by stalemate.",
            initialBoard: "6k1/8/5KP1/6P1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. g7    Kh7\n2. g6+    Kg8",
            comment: "\tlets the win slip  forever-- stalemate.",
            initialBoard: "6k1/8/5KP1/6P1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. g7    Kh7\n2. g8=Q+!  Kxg8\n3. Kg6     Kf8\n4. Kh7",
            comment: "White wins.",
            initialBoard: "6k1/8/5KP1/6P1/8/8/8/8 w - - 0 1"
        }
    ],
    "130": [
        {
            actions: "1. c5 Bb1 \n2. Ne6! fxe6 \n3. c6 Be4 \n4. c7 ",
            initialBoard: "8/1pN2p2/1P6/8/2P5/5k2/b7/6K1 w - - 0 1"
        },
        {
            actions: "1. c5        Bd5\n2. c6        bxc6\n3. b7",
            comment: "lets the Pawn escape.",
            initialBoard: "8/1pN2p2/1P6/8/2P5/5k2/b7/6K1 w - - 0 1"
        },
        {
            actions: "1. c5        Bb1\n2. Ne6!        Be4\n3. Ng5+    Kf4\n4. Nxe4    Kxe4\n5. c6",
            comment: "etc., with White  Queening first, and wins.",
            initialBoard: "8/1pN2p2/1P6/8/2P5/5k2/b7/6K1 w - - 0 1"
        }
    ],
    "131": [
        {
            actions: "1. f7 Rxa6+ \n2. Nf6  Ra8 \n3. Ne8  Ra6+ \n4. Kg5  Ra5+ \n5. Kg4  Ra4+ \n6. Kg3  Ra3+ \n7. Kf2  Ra2+ \n8. Ke3  Ra3+ \n9. Ke4  Ra4+ \n10. Ke5 Ra5+ \n11. Ke6 Ra6+ \n12. Kd7 Ra7+ \n13. Nc7 ",
            initialBoard: "8/8/P4PK1/8/6N1/8/8/r6k w - - 0 1"
        },
        {
            actions: "1. f7        Rxa6+\n2. Nf6        Ra8\n3. Ne8        Ra6+\n4. Kg7        Ra7",
            comment: "next, sacrificing the Rook for the Pawn, draws, i.e. K+N v. K scenario.",
            initialBoard: "8/8/P4PK1/8/6N1/8/8/r6k w - - 0 1"
        },
        {
            actions: "1. f7        Rxa6+\n2. Nf6        Ra8\n3. Ne8        Ra6+\n4. Kf5        Ra1\n5. Kd6        Rf1",
            comment: "with or without check, a Rook for a Pawn, draws for Black.",
            initialBoard: "8/8/P4PK1/8/6N1/8/8/r6k w - - 0 1"
        }
    ],
    "132": [
        {
            actions: "1. b7 Rf8 \n2. Nb4+ Ke4 \n3. Nc6  Kf4 \n4. g4!  Kxg4 \n5. Kg7  Re8 \n6. Kf7  Rh8 \n7. Ke7! Rg8 \n8. Nd8  Rg7+ \n9. Nf7  Rg8 \n10. Nh6+ ",
            initialBoard: "8/7p/1P5K/3N1r2/8/3k4/6P1/8 w - - 0 1"
        },
        {
            actions: "1. b7        Rf8\n2. Nb4+        Kc4\n3. Nc6        Kc5\n4. b8=Q    Rxb8\n5. Nxb8    Kd5\n6. g4        Ke5\n7. g5        Kf5\n8. Nd7        Kf4\n9. Nf6 ",
            comment: "and White wins.",
            initialBoard: "8/7p/1P5K/3N1r2/8/3k4/6P1/8 w - - 0 1"
        },
        {
            actions: "1. b7        Rf8\n2. Nb4+        Ke4\n3. Nc6        Kf4\n4. b8=Q    Rxb8\n5. Nxb8    Kg3",
            comment: "Black captures the  Pawn next move.  and draws.",
            initialBoard: "8/7p/1P5K/3N1r2/8/3k4/6P1/8 w - - 0 1"
        },
        {
            actions: "1. b7        Rf8\n2. Nb4+        Ke4\n3. Nc6        Kf4\n4. g4!        Kxg4",
            comment: "White stopped cold.",
            initialBoard: "8/7p/1P5K/3N1r2/8/3k4/6P1/8 w - - 0 1"
        },
        {
            actions: "1. b7        Rf8\n2. Nb4+        Ke4\n3. Nc6        Kf4\n4. g4!        Rf6+\n5. Kxh7    Rf7+",
            comment: "and White loses the  ambitious Queen  Knight Pawn.",
            initialBoard: "8/7p/1P5K/3N1r2/8/3k4/6P1/8 w - - 0 1"
        },
        {
            actions: "1. b7        Rf8\n2. Nb4+        Ke4\n3. Nc6        Kf4\n4. g4!        Kxg4\n5. Kg7         Re8\n6. Kf7        Rh8 \n7. Ke7!        Rg8\n8. Nd8        Rg7+",
            comment: "\t9 Kf6        Rxb7 Rook for Pawn swap draws easily.",
            initialBoard: "8/7p/1P5K/3N1r2/8/3k4/6P1/8 w - - 0 1"
        }
    ],
    "133": [
        {
            actions: "1. Kg4     Kc8 \n2. Kh5     Kd8 \n3. Ng7!    Bxg7 \n4. h8=Q+ Bxh8 \n5. Kg6     Ke7 \n6. Kh7     Kf7 \n7. Kxh8    Kf8 \n8. Kh7     Kf7 \n9. Kh6     Kf8 \n10. Kg6    Ke7 \n11. Kg7    Ke8 \n12. Kxf6     Kd8 \n13. Ke6    Ke8 \n14. f6     Kf8 \n15. f7     Kg7 \n16. Ke7 ",
            initialBoard: "1k2N2b/2p4P/2p2p2/2P2P2/8/5K2/8/8 w - - 0 1"
        },
        {
            actions: "1. Kg4        Kc8\n2. Kh5        Kd8\n3. Ng7!        Bxg7\n4. h8=Q+!",
            comment: "unexpected, and the  only way to win. ",
            initialBoard: "1k2N2b/2p4P/2p2p2/2P2P2/8/5K2/8/8 w - "
        },
        {
            actions: "1. Kg4        Kc8\n2. Kh5        Kd8\n3. Ng7!        Bxg7\n4. Kg6        Bh8\n5. Kf7        Kd7\n6. Kg8        Ke7\n7. Kxh8    Kf7",
            comment: "and White is  stalemated.",
            initialBoard: "1k2N2b/2p4P/2p2p2/2P2P2/8/5K2/8/8 w - "
        }
    ],
    "134": [
        {
            actions: "1. Kc7  a3 \n2. Ba4  a2 \n3. Kc6  a1=Q \n4. Bb5# ",
            initialBoard: "2K5/p7/k1B5/p7/p7/8/8/8 w - - 0 1"
        },
        {
            actions: "135.VAR-1\n1. h6        Kf7\n2. Bh7!        Kg8\n3. Kf4         Kh8",
            comment: " which would assure  Black of a draw.",
            initialBoard: "2K5/p7/k1B5/p7/p7/8/8/8 w - - 0 1"
        }
    ],
    "135": [
        {
            actions: "1. h6 Kf7 \n2. Bh7! Kf6 \n3. Kf4  Kf7 \n4. Kf5  Kf8 \n5. Kf6  Ke8 \n6. Bf5  Kf8 \n7. h7 Ke8 \n8. h8=Q# ",
            initialBoard: "8/4k3/8/7P/4B3/5K2/8/8 w - - 0 1"
        }
    ],
    "136": [
        {
            actions: "1. Be6! Ke7 \n2. h6 Kf6 \n3. Bf5! Kf7 \n4. Bh7! Kf6 \n5. Kf4  Kf7 \n6. Kf5  Kf8 \n7. Kf6  Ke8 \n8. Bf5  Kf8 \n9. h7 Ke8 \n10. h8=Q# ",
            initialBoard: "4k3/8/8/7P/8/4K2B/8/8 w - - 0 1"
        },
        {
            actions: "1. Be6!        Ke7\n2. h6        Kf6\n3. Bf7        Kf7",
            comment: "where the Pawn is attacked.",
            initialBoard: "4k3/8/8/7P/8/4K2B/8/8 w - - 0 1"
        },
        {
            actions: "1. Be6!        Ke7\n2. h6        Kf6\n3. Bf5!        Kf7\n4. Kf4           Kg8",
            comment: "and a sure draw.",
            initialBoard: "4k3/8/8/7P/8/4K2B/8/8 w - - 0 1"
        }
    ],
    "137": [
        {
            actions: "1. Kf7  h5 \n2. Ke6  h4 \n3. Kd5  h3 \n4. Kc4! h2 \n5. Bb4  h1=Q \n6. b3#! ",
            initialBoard: "6K1/8/7p/8/k7/2B5/1P6/8 w - - 0 1"
        },
        {
            actions: "1. Kf7        h5\n2. Bf6        Kb3\n3. Kg6        h4\n4. Bxh4        Kxb2",
            comment: "and Black has a King- Bishop v. King draw.",
            initialBoard: "6K1/8/7p/8/k7/2B5/1P6/8 w - - 0 1"
        },
        {
            actions: "1. Kf7        h5\n2. Bf6        Kb3\n3. Kf5",
            comment: "would close in  on the Pawn.",
            initialBoard: "6K1/8/7p/8/k7/2B5/1P6/8 w - - 0 1"
        },
        {
            actions: "1. Kf7        h5\n2. Bf6        h4\n3. Kd5        Kb3\n4. Ke4",
            comment: "Rook Pawn is doomed.",
            initialBoard: "6K1/8/7p/8/k7/2B5/1P6/8 w - - 0 1"
        }
    ],
    "138": [
        {
            actions: "1. a7 b2 \n2. a8=Q b1=Q \n3. Qb7+ Ke6 \n4. Qe7+ Kd5 \n5. Qd6+ Kc4 \n6. Qc5+ Kb3 \n7. Qc3+ Ka2 \n8. Qa3# ",
            initialBoard: "8/3k4/P7/K7/1B6/1p6/8/8 w - - 0 1"
        },
        {
            actions: "1. Bc3        Kc8\n2. Ka4         Kb8",
            comment: "wth Black a  certain draw.",
            initialBoard: "8/3k4/P7/K7/1B6/1p6/8/8 w - - 0 1"
        }
    ],
    "139": [
        {
            actions: "1. Bb4! Kf7 \n2. a4 Ke6 \n3. a5 Kd5 \n4. a6 Kc6 \n5. Ba5! d5 \n6. Kg2  d4 \n7. Kf3  d3 \n8. Ke3  Kd7 \n9. a7 ",
            initialBoard: "6k1/3p4/8/8/8/B7/P7/7K w - - 0 1"
        },
        {
            actions: "1. Bc5        Kf7\n2. a4        Ke6\n3. a5        Kd5\n4. a6        Kc6\n5. Kg2        Kc7",
            comment: "aiming for b8 and  a sure draw. ",
            initialBoard: "6k1/3p4/8/8/8/B7/P7/7K w - - 0 1"
        },
        {
            actions: "1. Bc5        Kf7\n2. a4        Ke6\n3. a5        Kd5\n4. a6        Kc6\n5. Kg2        Kc7\n6. Ba7        Kc6\n7. Bb8        Kb6\n8. a7        Kb7",
            comment: "White must concede  the draw.",
            initialBoard: "6k1/3p4/8/8/8/B7/P7/7K w - - 0 1"
        }
    ],
    "14": [
        {
            actions: "1. a4!  Kc5 \n2. Kg3  Kb6 \n3. c4 Ka5 \n4. c5 Ka6 \n5. Kf3  Kb7 \n6. a5 Kc6 \n7. a6 Kc7 \n8. Ke4  Kc6 \n9. Ke5  Kc7 \n10. Kd5 Kb8 \n11. c6  Kc7 \n12. a7 ",
            initialBoard: "8/8/8/8/2k5/P1P5/7K/8 w - - 0 1"
        },
        {
            actions: "1. a4!     Kxc3\n2. a5",
            comment: "Pawn cannot be  overtaken.",
            initialBoard: "8/8/8/8/2k5/P1P5/7K/8 w - - 0 1"
        },
        {
            actions: "1. a4!    Kc5\n2. c4    Kxc4",
            comment: "Pawn is captured  with a draw.    ",
            initialBoard: "8/8/8/8/2k5/P1P5/7K/8 w - - 0 1"
        },
        {
            actions: "1. a4!    Kc5\n2. a5    Kb5",
            comment: "Pawns are captured  with a draw.",
            initialBoard: "8/8/8/8/2k5/P1P5/7K/8 w - - 0 1"
        },
        {
            actions: "1. a4!     Kc5\n2. Kg3    Kc4\n3. Kf3",
            comment: "one Pawn is captured.  but parries the other.   ",
            initialBoard: "8/8/8/8/2k5/P1P5/7K/8 w - - 0 1"
        },
        {
            actions: "1. a4!     Kc5\n2. Kg3    Kb6\n3. c4    Kc5\n4. a5    ",
            comment: "and White’s  Pawn Queens.",
            initialBoard: "8/8/8/8/2k5/P1P5/7K/8 w - - 0 1"
        },
        {
            actions: "1. a4!     Kc5\n2. Kg3    Kb6\n3. c4    Ka5\n4. c5    Ka6\n5. Kf3    Kb7\n6. a5    Kc6\n7. a6    Kc7\n8. Ke4    Kc6\n9. Ke5    Kc7\n10. Kd5    Kb8\n11. c6    Ka7\n12. c7",
            comment: "White wins. ",
            initialBoard: "8/8/8/8/2k5/P1P5/7K/8 w - - 0 1"
        }
    ],
    "140": [
        {
            actions: "1. Bc5  Ka5 \n2. Kb7  Kb5 \n3. Bb6! Kc4 \n4. Kc6  Kb3 \n5. Bc5  Kc4 \n6. Bd6  Kd4 \n7. Kb5  Kd5 \n8. Bh2  Ke6 \n9. Kxa4 Kd7 \n10. Kb5 Kc8 \n11. Kc6 ",
            initialBoard: "8/8/k1K5/8/pB6/P7/8/8 w - - 0 1"
        },
        {
            actions: "1. Bc5        Ka5\n2. Kb7        Kb5\n3. Bb6!        Kc4\n4. Kc6        Kd3\n5. Kb5        Ke4\n6. Kxa4    Kd5\n7. Kb5        Kd6\n8. Ka6        Kc6\n9. a4        Kd7\n10. Kb7",
            comment: "Black is kept out   with plenty of protection  for a Pawn Queening.",
            initialBoard: "8/8/k1K5/8/pB6/P7/8/8 w - - 0 1"
        }
    ],
    "141": [
        {
            actions: "1. Bd4! g1=Q \n2. Bxg1 a2 \n3. Bd4! Kxd4 \n4. c8=Q a1=Q \n5. Qh8+ ",
            initialBoard: "8/2P5/1K6/3k4/8/p7/6p1/B7 w - - 0 1"
        },
        {
            actions: "1. Bd4!        Kxd4\n2. c8=Q    g1=Q\n3. Qc5+",
            comment: "again Black forfeits  His Queen.",
            initialBoard: "8/2P5/1K6/3k4/8/p7/6p1/B7 w - - 0 1"
        },
        {
            actions: "1. Bd4!        g1=Q\n2. Bxg1        a2\n3. c8=Q    a1=Q",
            comment: "would have drawn  for Black.",
            initialBoard: "8/2P5/1K6/3k4/8/p7/6p1/B7 w - - 0 1"
        }
    ],
    "142": [
        {
            actions: "1. c5!  h4 \n2. Be6! dxe6 \n3. c6 h3 \n4. c7 h2 \n5. c8=Q h1=Q \n6. Qc3+ Kd5 \n7. Qc5+ Ke4 \n8. Qc6+ ",
            initialBoard: "8/3p4/8/7p/1KPk4/8/B7/8 w - - 0 1"
        },
        {
            actions: "1. Bb1        h4\n2. Bf5        d6\n3. Bh3        Kd3\n4. Bf1+        Kd4\n5. Kb5        Kc3\n6. Kc6        h3\n7. Kd5        h2\n8. Bg2        Kd3",
            comment: "captures Queen Pawn  only at the expense of  his own Pawn.",
            initialBoard: "8/3p4/8/7p/1KPk4/8/B7/8 w - - 0 1"
        },
        {
            actions: "1. Bb1        h4\n2. Bf5        d6\n3. Bh3        Kd3\n4. Bf1+        Kd4\n5. Kb5        Kc3\n6. Kc6        h3\n7. Kxd6    h2\n8. Bg2        Kxc4",
            comment: "and a draw.",
            initialBoard: "8/3p4/8/7p/1KPk4/8/B7/8 w - - 0 1"
        }
    ],
    "143": [
        {
            actions: "1. Bg1+ Kb4 \n2. Bd4  Kb3 \n3. Bc3  b4 \n4. Kd4! bxc3 \n5. bxc3 Ka4 \n6. Kxc4",
            initialBoard: "8/8/8/1pk1K3/2p5/8/1P5B/8 w - - 0 1"
        },
        {
            actions: "1. Bg1+         c3\n2. bxc3        Kc4",
            comment: "invaluable Pawn comes  off the board, enabling  Black to draw.",
            initialBoard: "8/8/8/1pk1K3/2p5/8/1P5B/8 w - - 0 1"
        },
        {
            actions: "1. Bg1+        Kb4\n2. Bd4        Kb3\n3. Bc3        b4\n4. Bd4        c3",
            comment: "Black forces the draw.",
            initialBoard: "8/8/8/1pk1K3/2p5/8/1P5B/8 w - - 0 1"
        }
    ],
    "144": [
        {
            actions: "1. Kc6  Ka8 \n2. Kb6! b4 \n3. axb4 a3 \n4. b5 a2 \n5. Be5  a1=Q \n6. Bxa1 Kb8 \n7. Be5+ Ka8 \n8. Kc7  Ka7 \n9. b6+ ",
            initialBoard: "8/k7/8/1pK5/p4B2/P7/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc6        Ka6\n2. Be3        Ka5\n3. Bc5        Ka6\n4. Bb6        b4\n5. axb4        a3\n6. b5#",
            comment: "",
            initialBoard: "8/k7/8/1pK5/p4B2/P7/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc6        Ka8\n2. Kxb5??",
            comment: "after which the King- Bishop v. King scenario  draws.",
            initialBoard: "8/k7/8/1pK5/p4B2/P7/8/8 w - - 0 1"
        }
    ],
    "145": [
        {
            actions: "1. Bf3+  Kg1 \n2. Bh1!  Kxh1 \n3. Kf1   d5 \n4. exd5  e4 \n5. d6  e3 \n6. d7  e2+ \n7. Kxe2  Kg1 \n8. d8=Q  h1=Q \n9. Qd4+  Kh2 \n10. Qh4+ Kg2 \n11. Qg4+ Kh2 \n12. Kf2 ",
            initialBoard: "8/8/3p4/4p2B/4P3/8/4K1kp/8 w - - 0 1"
        },
        {
            actions: "1. Bf3+        Kg1\n2. Bh1!        Kxh1\n3. Kf1        d5\n4. exd5        e4\n5. d6        e3\n6. d7        e2+\n7. Kxe2        Kg1\n8. d8=Q    h1=Q\n9. Qg5+?    Qg2+",
            comment: "forcing a draw.",
            initialBoard: "8/8/3p4/4p2B/4P3/8/4K1kp/8 w - - 0 1"
        },
        {
            actions: "1. Bf3+        Kg1\n2. Bh1!        Kxh1\n3. Kf1        d5\n4. exd5        e4\n5. d6        e3\n6. d7        e2+\n7. Kxe2        Kg1\n8. d8=Q    h1=Q\n9. Qd4+    Kh2\n10. Qh4+    Kg1\n11. Qf2#",
            comment: "",
            initialBoard: "8/8/3p4/4p2B/4P3/8/4K1kp/8 w - - 0 1"
        }
    ],
    "146": [
        {
            actions: "1. Bb1!   f4 \n2. Kc6    f3 \n3. Kc5!   Kb3 \n4. d7   f2 \n5. d8=Q   f1=Q \n6. Qd5+   Kc3 \n7. Qd4+   Kb3 \n8. Qa4+! Kxa4 \n9. Bc2# ",
            initialBoard: "8/3K4/3P1p2/p4p2/k3B3/p7/8/8 w - - 0 1"
        },
        {
            actions: "1. Bb1!        Kb3\n2. Kc6        Kb2\n3. d7        Kxb1\n4. d8=Q    a2\n5. Qb6+    Ka1\n6. Qxa5    Kb2\n7. Qb4+    Kc2\n8. Qa3        Kb1\n9. Qb3+    Ka1\n10. Qc2        f4\n11. Qc1#",
            comment: "",
            initialBoard: "8/3K4/3P1p2/p4p2/k3B3/p7/8/8 w - - 0 1"
        },
        {
            actions: "1. Bbl!        f4\n2. Kc 6        f3\n3. Kc5!        Kb3\n4. d7        f2\n5. d8=Q        f1=Q\n6. Qd5+        Kb2\n7. Qa2+        Kc3\n8. Qc2# ",
            comment: "",
            initialBoard: "8/3K4/3P1p2/p4p2/k3B3/p7/8/8 w - - 0 1"
        },
        {
            actions: "1. Bbl!        f4\n2. Kc 6        f3\n3. Kc5!        Kb3\n4. d7        f2\n5. d8=Q        f1=Q\n6. Qd5+        Kc3\n7. Qd4+        Kb3\n8. Qa4+!        Kb2\n9. Qc2+        Ka1\n10. Qa2#",
            comment: "",
            initialBoard: "8/3K4/3P1p2/p4p2/k3B3/p7/8/8 w - - 0 1"
        }
    ],
    "147": [
        {
            actions: "1. Bf7  Kb5 \n2. Be8+ Ka5 \n3. Bd7  Ka6 \n4. Bh3  Ka5 \n5. Bg4  Kb5 \n6. Be2+ Ka5 \n7. Bc4 ",
            initialBoard: "3n4/2K5/1P6/k7/2B5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Bf7                Kb5\n2. Be8+               Ka5\n3. Bh5        Ne6+\n4. Kc6        Nd8+\n5. Kc5        Ne6+\n6. Kc6        Nd8+",
            comment: "Black has a perpetual check- aka draw.",
            initialBoard: "3n4/2K5/1P6/k7/2B5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Bf7        Kb5\n2. Be8+            Ka5\n3. Bd7        Ka6\n4. Bh3           Nb7\n5. Bg2",
            comment: "White wins.",
            initialBoard: "3n4/2K5/1P6/k7/2B5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Bf7        Kb5\n2. Be8+            Ka5\n3. Bd7        Ka6\n4. Bh3           Nb7\n5. Bf1+",
            comment: "White wins.",
            initialBoard: "3n4/2K5/1P6/k7/2B5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Bf7        Kb5\n2. Be8+            Ka5\n3. Bd7        Ka6\n4. Bh3           Ka5\n5. Bg4        Kb5\n6. Be2+     Kc5\n7. Bc4",
            comment: "leaves Black helpless.",
            initialBoard: "3n4/2K5/1P6/k7/2B5/8/8/8 w - - 0 1"
        }
    ],
    "148": [
        {
            actions: "1. Kg5  Nf2 \n2. h4!  Ne4+ \n3. Kg6  Nxd6 \n4. h5 Nc4 \n5. h6 Ne5+ \n6. Kg7",
            initialBoard: "8/8/3B4/8/7K/5k1P/8/3n4 w - - 0 1"
        },
        {
            actions: "1. Kg5        Nf2\n2. h4!        Ne4+\n3. Kg6        Nf2\n4. h5        Ng4\n5. Kg5",
            comment: "Knight must retreat, King can no longer  move and protect it.",
            initialBoard: "8/8/3B4/8/7K/5k1P/8/3n4 w - - 0 1"
        }
    ],
    "149": [
        {
            actions: "1. Bc3  Ba3 \n2. Bg7  Bb4 \n3. Bf8  Bd2 \n4. Bc5  Bh6 \n5. Bd4  Kf5 \n6. Bg7 ",
            initialBoard: "6K1/5P2/6k1/2b5/8/8/3B4/8 w - - 0 1"
        }
    ],
    "15": [
        {
            actions: "1. Kf4  Kh7 \n2. Kg5  Kh8 \n3. Kh6! Kg8 \n4. Kxg6 Kh8 \n5. Kf7  Kh7 \n6. Ke8",
            initialBoard: "8/8/5Ppk/8/8/4K3/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf4    g5+\n2. Kf5    g4\n3. Ke6    g3\n4. f7     g2\n5. f8=Q+",
            comment: "White takes Pawn or Queen and wins.",
            initialBoard: "8/8/5Ppk/8/8/4K3/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf4    g5+\n2. Kf5    g4\n3. Ke6    g3\n4. f7    Kg7\n5. Ke7",
            comment: "White wins.",
            initialBoard: "8/8/5Ppk/8/8/4K3/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf4    Kh7\n2. Kg5    Kh8\n3. Kh6!    g5\n4. f7",
            comment: "followed by  f8=Q#.",
            initialBoard: "8/8/5Ppk/8/8/4K3/8/8 w - - 0 1"
        }
    ],
    "150": [
        {
            actions: "1. Be7  Be3 \n2. Bf8  Bg5 \n3. Bg7  Kd6 \n4. Bf6  Bd2 \n5. e7 ",
            initialBoard: "3B4/5K2/4P3/2bk4/8/8/8/8 w - - 0 1"
        }
    ],
    "151": [
        {
            actions: "1. Bg5  Bf8 \n2. Kf6! Be7+ \n3. Kf7  Bf8 \n4. Be3",
            initialBoard: "8/4B1b1/6P1/5K1k/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Bg5        Bb2\n2. Bf6",
            comment: "wins instantly.",
            initialBoard: "8/4B1b1/6P1/5K1k/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Bg5        Bf8\n2. Kf 6!        Kg4\n3. Bd2        Kh5\n4. Kf7",
            comment: "Black is out  of moves. ",
            initialBoard: "8/4B1b1/6P1/5K1k/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Bg5        Bf8\n2. Kf 6!        Kg4\n3. Bd2        Bc5\n4. Bc3        Bf8\n5. Kf7        Kf5\n6. Bd2",
            comment: "and White wins.",
            initialBoard: "8/4B1b1/6P1/5K1k/8/8/8/8 w - - 0 1"
        }
    ],
    "152": [
        {
            actions: "1. Kh7! Bb2 \n2. Bf4  Bd4 \n3. Bh6+ Ke8 \n4. Bg7  Bc5 \n5. Be5  Bf8 \n6. Bd6! Bxd6 \n7. g7",
            initialBoard: "5k2/8/6PK/8/8/2b3B1/8/8 w - - 0 1"
        },
        {
            actions: "1. Kh7!        Bb2\n2. Bf4        Bd4\n3. Bh6+        Ke8\n4. Bg7        Be3\n5. Bb2         Bg5?\n6. g7",
            comment: "with White winning.",
            initialBoard: "5k2/8/6PK/8/8/2b3B1/8/8 w - - 0 1"
        }
    ],
    "153": [
        {
            actions: "1. Bg7  Bg5 \n2. Bh6  Bf6 \n3. Be3  Bg7 \n4. Bg5  Bf8 \n5. Bf6  Kf4 \n6. Bg7 ",
            initialBoard: "8/8/6K1/4B2P/6k1/4b3/8/8 w - - 0 1"
        },
        {
            actions: "1. Bg7        Bg5\n2. Bh6        Bf6\n3. Bg5        Bg7\n4. Be7!        Bc3\n5. h6        Bd4\n6. Bf6",
            comment: "White wins.",
            initialBoard: "8/8/6K1/4B2P/6k1/4b3/8/8 w - - 0 1"
        },
        {
            actions: "1. Bg7        Bg5\n2. Bh6        Be7\n3. Be3        Bf8\n4. Bd4        Kf4\n5. Bg7",
            comment: "is conclusive.",
            initialBoard: "8/8/6K1/4B2P/6k1/4b3/8/8 w - - 0 1"
        },
        {
            actions: "1. Bg7        Bg5\n2. Bh6        Be7\n3. Be3        Bf8\n4. Bd4        Kh4\n5. Be5        Kg4\n6. Bf6        Kf4\n7. Bg7",
            comment: "Pawn now has  a clear road ahead.",
            initialBoard: "8/8/6K1/4B2P/6k1/4b3/8/8 w - - 0 1"
        }
    ],
    "154": [
        {
            actions: "1. Bh4  Kb6 \n2. Bf2+ Ka6 \n3. Bc5! Bg3 \n4. Be7  Kb6 \n5. Bd8+ Kc6 \n6. Bh4! Bh2 \n7. Bf2  Kb5 \n8. Ba7  Ka6 \n9. Bb8  Bg1 \n10. Bf4 Ba7 \n11. Be3 ",
            initialBoard: "2KB4/1P6/2k5/8/8/8/7b/8 w - - 0 1"
        },
        {
            actions: "1. Bh4        Be5\n2. Bf6        Bh2\n3. Bd4        Bg3\n4. Ba7        Bf4\n5. Bb8        Be3\n6. Bh2        Ba7\n7. Bg1\n154.VAR-2\n1. Bh4        Kb6\n2. Bf2+        Kc6\n3. Ba7        Bg3\n4. Bb8        Bf2\n5. Bh2        Ba7\n6. Bg1",
            comment: "and White wins.      again Bishop is cornered, White wins.",
            initialBoard: "2KB4/1P6/2k5/8/8/8/7b/8 w - - 0 1"
        },
        {
            actions: "1. Bh4        Kb6\n2. Bf2+        Ka6\n3. Bc5!        Bg3\n4. Be7        Kb6\n6. Bc7",
            comment: " 5 Bd8        Kc6 is decisive in draw.",
            initialBoard: "2KB4/1P6/2k5/8/8/8/7b/8 w - - 0 1"
        },
        {
            actions: "1. Bh4        Kb6\n2. Bf2+        Ka6\n3. Bc5!        Bf4\n4. Be7        Kb6\n5. Bd8+        Kc6\n6. Bg5",
            comment: "a draw.",
            initialBoard: "2KB4/1P6/2k5/8/8/8/7b/8 w - - 0 1"
        },
        {
            actions: "1. Bh4        Kb6\n2. Bf2+        Ka6\n3. Bc5!        Be5\n4. Be7        Kb6\n5. Bd8+        Kc6\n6. Bf6",
            comment: "another draw.",
            initialBoard: "2KB4/1P6/2k5/8/8/8/7b/8 w - - 0 1"
        }
    ],
    "155": [
        {
            actions: "1. Bc6! Kd8 \n2. Kf5! Ke7 \n3. Ke5! Kf7 \n4. Kd4  Ke6 \n5. Kc5  Ke7 \n6. Bf3  Kd7 \n7. Bg4+ Ke7 \n8. Kc6  Kd8 \n9. Kb7 ",
            initialBoard: "2k5/P1p5/1n2K3/8/4B3/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Bc6!        Kd8\n2. Ke5        Ke7",
            comment: "giving Black the  opposition and a draw. ",
            initialBoard: "2k5/P1p5/1n2K3/8/4B3/8/8/8 w - - 0 1"
        }
    ],
    "156": [
        {
            actions: "1. g5+  Ke7 \n2. g6 Ke8 \n3. Bd7+ Kxd7 \n4. g7 ",
            initialBoard: "2B5/8/5k1K/4p3/1b4P1/8/8/8 w - - 0 1"
        }
    ],
    "157": [
        {
            actions: "1. Ba7! Ba1 \n2. Kb1  Bc3 \n3. Kc2  Ba1 \n4. Bd4! Bxd4 \n5. Kd3  Ba1 \n6. Ke4 ",
            initialBoard: "1B6/8/7P/4p3/3b3k/8/8/2K5 w - - 0 1"
        },
        {
            actions: "1. h7        e4",
            comment: "ruins White’s  winning chances.",
            initialBoard: "1B6/8/7P/4p3/3b3k/8/8/2K5 w - - 0 1"
        },
        {
            actions: "1. Ba7!        Bxa7\n2. h7",
            comment: "wins for White.",
            initialBoard: "1B6/8/7P/4p3/3b3k/8/8/2K5 w - - 0 1"
        },
        {
            actions: "1. Ba7!        Ba1\n2. Kb1        Bc3\n3. Kc2        Ba1\n4. Bd4!    exd4\n5. Kd3 ",
            comment: "blocks Bishop's path  assuring Rook Pawn  of Queening.",
            initialBoard: "1B6/8/7P/4p3/3b3k/8/8/2K5 w - - 0 1"
        },
        {
            actions: "1. Ba7!        Ba1\n2. Kb1        Bc3\n3. Kc2        Ba1\n4. Bd4!    Bxd4\n5. Kd3        Kg5\n6. h7        e4+\n7. Kxd4",
            comment: "Pawn cannot be  over-taken.",
            initialBoard: "1B6/8/7P/4p3/3b3k/8/8/2K5 w - - 0 1"
        },
        {
            actions: "1. Ba7!        Ba1\n2. Kb1        Bc3\n3. Kc2        Ba1\n4. Bd4!        Bxd4\n5. Kd3        Ba1\n6. h7        e4+",
            comment: "Bishop will prevent  Pawn from Queening.",
            initialBoard: "1B6/8/7P/4p3/3b3k/8/8/2K5 w - - 0 1"
        }
    ],
    "158": [
        {
            actions: "1. Bf2+ Kh5 \n2. g4+  Kh6 \n3. Kf6  Kh7 \n4. g5 Kh8 \n5. Bd4  Kh7 \n6. Ba1  Kh8 \n7. g6!  fxg6 \n8. Kxg6# ",
            initialBoard: "6b1/5p2/8/2B2K2/7k/8/6P1/8 w - - 0 1"
        },
        {
            actions: "1. Bf2+    Kh5\n2. g4+        Kh6\n3. Kf6        Bh7\n4. Be3#",
            comment: "",
            initialBoard: "6b1/5p2/8/2B2K2/7k/8/6P1/8 w - - 0 1"
        },
        {
            actions: "1. Bf2+    Kh5\n2. g4+        Kh6\n3. Kf6        Kh7\n4. g5        Kh8\n5. Bd4        Bh7\n6. Kxf7#",
            comment: "",
            initialBoard: "6b1/5p2/8/2B2K2/7k/8/6P1/8 w - - 0 1"
        },
        {
            actions: "1. Bf2+    Kh5\n2. g4+        Kh6\n3. Kf6        Kh7\n4. g5        Kh8\n5. Bd4        Kh7\n6. Ba1        Kh8\n7. g6!        Bh7\n8. Kxf7#",
            comment: "",
            initialBoard: "6b1/5p2/8/2B2K2/7k/8/6P1/8 w - - 0 1"
        }
    ],
    "159": [
        {
            actions: "1. e5 Bb7 \n2. e6 Bc8 \n3. e7 Bd7 \n4. Bh3! Be8 \n5. Kf8  Bh5 \n6. Bg4  Bg6 \n7. Bf5+ Bxf5 \n8. e8=Q ",
            initialBoard: "b7/6K1/2p5/8/4Pp2/8/2k3B1/8 w - - 0 1"
        },
        {
            actions: "1. e5        Bb7\n2. e6        Bc8\n3. e7        Bd7\n4. Kf8        c5",
            comment: "wins for Black!",
            initialBoard: "b7/6K1/2p5/8/4Pp2/8/2k3B1/8 w - - 0 1"
        },
        {
            actions: "1. e5        Bb7\n2. e6        Bc8\n3. e7        Bd7\n4. Bh3!    Be8\n5. Kf8        Bh5\n6. Be6     f3",
            comment: "giving Black a draw.",
            initialBoard: "b7/6K1/2p5/8/4Pp2/8/2k3B1/8 w - - 0 1"
        }
    ],
    "16": [
        {
            actions: "1. Kb1! a3 \n2. b3!   Ke5 \n3. Ka2   Kd5 \n4. Kxa3 Kc6 \n5. Ka4!  Kb6 \n6. Kb4",
            initialBoard: "8/8/5k2/8/p7/8/1PK5/8 w - - 0 1"
        },
        {
            actions: "1. Kc3    a3! \n2. bxa3    Ke6",
            comment: "Black draws easily.",
            initialBoard: "8/8/5k2/8/p7/8/1PK5/8 w - - 0 1"
        },
        {
            actions: "1. Kc3    a3!\n2. b4    Ke5\n3. Kb3    Kd5\n4. Kxa3    Kc6\n5. Ka4    Kb6\n6. b5    Kb7\n7. Ka5    Ka7\n8. b6+    Kb7\n9. Kb5    Kb8\n10. Kc6    Kc8",
            comment: "White cannot  avoid the draw.",
            initialBoard: "8/8/5k2/8/p7/8/1PK5/8 w - - 0 1"
        },
        {
            actions: "1. Kb1!    Ke5\n2. Ka2    Kd5\n3. Ka3    Kc5\n4. Kxa4     Kb6\n5. Kb4",
            comment: "\tWhite having the \topposition wins. ",
            initialBoard: "8/8/5k2/8/p7/8/1PK5/8 w - - 0 1"
        },
        {
            actions: "1. Kb1!     a3\n2.   b3!    Ke5\n3.   Ka2    Kd5\n4.   Kxa3    Kc6\n5. Kb4!    Kb6",
            comment: "Black with the opposition draws.",
            initialBoard: "8/8/5k2/8/p7/8/1PK5/8 w - - 0 1"
        }
    ],
    "160": [
        {
            actions: "1. c6 Ba4 \n2. c7 Bd7 \n3. Ke7  Bc8 \n4. Kd8  Bf5 \n5. Bd3  Be6 \n6. Bc4  Kf7 \n7. c8=Q",
            initialBoard: "6k1/8/p4K2/2P5/6p1/1b6/8/5B2 w - - 0 1"
        },
        {
            actions: "1. c6        Bd5\n2. Bc4         g3\n3. Bxd5+",
            comment: "and the Knight Pawn  is harmless. ",
            initialBoard: "6k1/8/p4K2/2P5/6p1/1b6/8/5B2 w - - 0 1"
        },
        {
            actions: "1. c6        Bd5\n2. Bc4        Bxc4\n3. c7",
            comment: "and White wins.",
            initialBoard: "6k1/8/p4K2/2P5/6p1/1b6/8/5B2 w - - 0 1"
        },
        {
            actions: "1. c6        Ba4\n2. c7        Bd7\n3. Ke7        Bc8\n4. Kd8        Bb7\n5. Bg2    Bxg2\n6. c8=Q ",
            comment: "White wins.",
            initialBoard: "6k1/8/p4K2/2P5/6p1/1b6/8/5B2 w - - 0 1"
        }
    ],
    "161": [
        {
            actions: "1. d7 Rh8 \n2. Kg7  Rb8 \n3. Bc7",
            initialBoard: "k7/8/3P2K1/B7/8/8/7r/8 w - - 0 1"
        },
        {
            actions: "1. d7        Rg2+\n2. Kf7        Rf2+\n3. Ke7        Re2+\n4. Kd6",
            comment: "a the Rook is out  of checks.",
            initialBoard: "k7/8/3P2K1/B7/8/8/7r/8 w - - 0 1"
        }
    ],
    "162": [
        {
            actions: "1. b7 Rd3+ \n2. Ke6! Rd8 \n3. Bc7  Rh8 \n4. Be5  Rd8 \n5. Ke7  Rg8 \n6. Kf7  Rd8 \n7. Bc7  Rh8 \n8. Bd6+ Ka5 \n9. Bf8  Rh7+ \n10. Bg7",
            initialBoard: "8/8/1P6/3K4/1k6/5rB1/8/8 w - - 0 1"
        },
        {
            actions: "1. b7        Rf5+\n2. Be5        Rf8\n3. Bd6+ ",
            comment: "a beaut of a fork  wins the Rook.",
            initialBoard: "8/8/1P6/3K4/1k6/5rB1/8/8 w - - 0 1"
        },
        {
            actions: "1. b7        Rd3+\n2. Ke6!    Rd8\n3. Bc7        Rh8\n4. Be5        Re8+\n5. Kf7        Rd8\n6. Bc7        Rh8\n7. Bd6+",
            comment: "leads by a transposition  of moves into the actual play.",
            initialBoard: "8/8/1P6/3K4/1k6/5rB1/8/8 w - - 0 1"
        }
    ],
    "163": [
        {
            actions: "1. c7 Re2+ \n2. Kf6  Re8 \n3. Ba4! Rg8 \n4. Kf7  Rh8 \n5. Kg7  Ra8 \n6. Bc6  Ra7 \n7. Bd7+!  Kh4 \n8. c8=Q ",
            initialBoard: "8/8/2P5/4K3/8/1B5k/6r1/8 w - - 0 1"
        },
        {
            actions: "1. c7        Rg5+\n2. Kd4    Rg4+\n3. Kc3        Rg3+\n4. Kb2        Rg2+\n5. Ka3",
            comment: "and White wins.",
            initialBoard: "8/8/2P5/4K3/8/1B5k/6r1/8 w - - 0 1"
        },
        {
            actions: "1. c7        Re2+\n2. Kf6        Re8\n3. Ba4!        Rg8\n4. Kf7        Rh8\n5. Kg7        Rc8\n6. Bd7+",
            comment: "Wins the Rook.",
            initialBoard: "8/8/2P5/4K3/8/1B5k/6r1/8 w - - 0 1"
        }
    ],
    "164": [
        {
            actions: "1. a7 Rf5+ \n2. Ke2  Re5+ \n3. Kd2  Re8 \n4. Bf2+ Ke5 \n5. Bg3+ Kf5 \n6. Bb8",
            initialBoard: "8/8/P7/3p3r/3k3B/3P4/5K2/8 w - - 0 1"
        },
        {
            actions: "1. a7        Rh8\n2. Bf6+",
            comment: "wins the Rook.",
            initialBoard: "8/8/P7/3p3r/3k3B/3P4/5K2/8 w - - 0 1"
        },
        {
            actions: "1. a7        Rf5+\n2. Ke2     Rf8\n3. Bf6+    Kc5\n4. Bf7+",
            comment: "again the Rook goes.",
            initialBoard: "8/8/P7/3p3r/3k3B/3P4/5K2/8 w - - 0 1"
        }
    ],
    "165": [
        {
            actions: "1. b7 Ra5+ \n2. Kd6! Rb5! \n3. Bc6+ Kd8 \n4. Bxb5 Bc8! \n5. b8=B!  Bg4 \n6. Bc7+ Kc8 \n7. Ba6# ",
            initialBoard: "4k3/8/1P2b3/4K3/4B3/8/8/r7 w - - 0 1"
        },
        {
            actions: "1. b7        Ra5+\n2. Kxe6    Rb5\n3. Bc6+    Kd8\n4. Bxb5    Kc7\n5. Ba6",
            comment: "and White wins. ",
            initialBoard: "4k3/8/1P2b3/4K3/4B3/8/8/r7 w - - 0 1"
        },
        {
            actions: "1. b7        Ra5+\n2. Kxe6    Ra6+\n3. Kd5    Rb6\n4. Kd4    Rxb7",
            comment: "Black draws with King v. King-Bishop. scenario.",
            initialBoard: "4k3/8/1P2b3/4K3/4B3/8/8/r7 w - - 0 1"
        },
        {
            actions: "1. b7        Ra5+\n2. Kd6!    Ra6+\n3. Bc6+",
            comment: "Pawn will advance.",
            initialBoard: "4k3/8/1P2b3/4K3/4B3/8/8/r7 w - - 0 1"
        },
        {
            actions: "1. b7        Ra5+\n2. Kd6!    Rb5!\n3. Bc6+    Kd8\n4. Bxb5    Bc8!\n5. b8=Q",
            comment: "stalemates Black. There’s a better move. ",
            initialBoard: "4k3/8/1P2b3/4K3/4B3/8/8/r7 w - - 0 1"
        },
        {
            actions: "1. b7        Ra5+\n2. Kd6!    Rb5!\n3. Bc6+    Kd8\n4. Bxb5    Bc8!\n5. b8=B!    Bb7\n6. Bc7+    Kc8\n7. Bd7#",
            comment: "",
            initialBoard: "4k3/8/1P2b3/4K3/4B3/8/8/r7 w - - 0 1"
        }
    ],
    "166": [
        {
            actions: "1. Kg8! Be6+ \n2. Kh8  Bf5 \n3. g7!  Bxh7 \n4. h3! Kg6 \n5. h4 Kh6 \n6. h5",
            initialBoard: "8/3b1K1B/6Pk/8/8/8/7P/8 w - - 0 1"
        },
        {
            actions: "1. g7        Be6+\n2. Kxe6     Kxg7",
            comment: "Black draws against  the Rook Pawn and  a Bishop that does  not control the Pawn's  Queening square. ",
            initialBoard: "8/3b1K1B/6Pk/8/8/8/7P/8 w - - 0 1"
        },
        {
            actions: "1. Kf6        Be8\n2. h4        Bxg6\n3. Bxg6",
            comment: "Black draws by stalemate. ",
            initialBoard: "8/3b1K1B/6Pk/8/8/8/7P/8 w - - 0 1"
        },
        {
            actions: "1. Bg8        Be6+\n2. Kxe6    Kxg6",
            comment: "Black gets to the corner and draws.",
            initialBoard: "8/3b1K1B/6Pk/8/8/8/7P/8 w - - 0 1"
        },
        {
            actions: "1. Kg8!        Bf5\n2. g7!        Bxh7+\n3. Kh8        Kg6 \n4. h4        Kh6\n5. h5",
            comment: "Black is in zugzwang, though for every  he move loses.",
            initialBoard: "8/3b1K1B/6Pk/8/8/8/7P/8 w - - 0 1"
        },
        {
            actions: "1. Kg8!        Be6+\n2. Kh8        Bd5\n3. g7        Be6\n4. Bg8        Bf5\n5. Bd5        Bh7\n6. Be4        Bxe4\n7. g8=Q",
            comment: "White wins.",
            initialBoard: "8/3b1K1B/6Pk/8/8/8/7P/8 w - - 0 1"
        },
        {
            actions: "1. Kg8!        Be6+\n2. Kh8        Bf5\n3. g7!        Bxh7\n4. h4        Kg6\n5. h5+        Kh6",
            comment: "White who is in zugzwang,  must give up both Pawns and draws.",
            initialBoard: "8/3b1K1B/6Pk/8/8/8/7P/8 w - - 0 1"
        }
    ],
    "167": [
        {
            actions: "1. g6 Bc2 \n2. f5 Bb3 \n3. Kg5  Bc2 \n4. f6 Bb3 \n5. Bb4+ Kg8 \n6. Kf4  Bc4 \n7. Ke5  Bb3 \n8. Kd6  Kf8 \n9. Kd7+ Kg8 \n10. Ke7 Bc4 \n11. f7+ ",
            initialBoard: "5k2/8/5K2/6P1/5P2/1bB5/8/8 w - - 0 1"
        },
        {
            actions: "1. g6         Bc2\n2. f5        Bb3\n3. Kg5        Bc2\n4. f6        Bb3\n5. Bb4+    Ke8\n6. Kh6          Bc2\n7. Kg7          Bd1\n8. f7+            Kd8\n9. f8=Q",
            comment: "Black being unable  meanwhile to do  anything but watch",
            initialBoard: "5k2/8/5K2/6P1/5P2/1bB5/8/8 w - - 0 1"
        },
        {
            actions: "1. g6         Bc2\n2. f5        Bb3\n3. Kg5        Bc2\n4. f6        Bb3\n5. Bb4+    Ke8\n6. Kf4        Bc2\n7. f7+",
            comment: "White  wins at once.",
            initialBoard: "5k2/8/5K2/6P1/5P2/1bB5/8/8 w - - 0 1"
        },
        {
            actions: "2. f5        Bb3\n3. Kg5        Bc2\n4. f6        Bb3\n5. Bb4+    Ke8\n6. Kf4        Bc4\n7. Ke5        Bb3\n8. Kd6        Bc2\n9. f7+        Kg7\n10. Ke7",
            comment: " 1 g6         Bc2  is decisive for White   win at once again.",
            initialBoard: "5k2/8/5K2/6P1/5P2/1bB5/8/8 w - - 0 1"
        },
        {
            actions: "1. g6         Bc2\n2. f5        Bb3\n3. Kg5        Bc2\n4. f6        Bb3\n5. Bb4+    Kg8\n6. Kf4        Bc4\n7. Ke5        Bb3\n8. Kd6        Bc2\n9. f7+        Kg7\n10. Ke7",
            comment: "is decisive.",
            initialBoard: "5k2/8/5K2/6P1/5P2/1bB5/8/8 w - - 0 1"
        }
    ],
    "168": [
        {
            actions: "1. Bc4+ Ke7 \n2. Ke4! Bg7 \n3. Kf5  Bh6 \n4. Kg4! Bf8 \n5. Kg5  Bg7 \n6. Kg6  Bf8 \n7. f5 Ke8 \n8. f6 Bc5 \n9. Kg7  Bf8+ \n10. Kg8 Bc5 \n11. e6  Bb4 \n12. Bb5+  Kd8 \n13. Kf7 Bc5 \n14. e7+ ",
            initialBoard: "5b2/5k2/8/4P3/5P2/5K2/4B3/8 w - - 0 1"
        },
        {
            actions: "1. Bc4+    Ke7\n2. f5        Bg7\n3. Kf4        Bh8",
            comment: "Black has an easy  draw. ",
            initialBoard: "5b2/5k2/8/4P3/5P2/5K2/4B3/8 w - - 0 1"
        },
        {
            actions: "1. Bc4+    Ke7\n2. f5        Bg7\n3. Kf4        Bh8\n4. e6",
            comment: "White has no winning  chance. ",
            initialBoard: "5b2/5k2/8/4P3/5P2/5K2/4B3/8 w - - 0 1"
        },
        {
            actions: "1. Bc4+    Ke7\n2. f5        Bg7\n3. Kf4        Bh8\n4. f6+",
            comment: " allows the Bishop   to sacrifice itself for  the two Pawns.",
            initialBoard: "5b2/5k2/8/4P3/5P2/5K2/4B3/8 w - - 0 1"
        },
        {
            actions: "1. Bc4+    Ke7\n2. Ke4!    Bg7\n3. Kf5        Bh6\n4. Kg4!    Bg7\n5. Kg5",
            comment: " leads to the actual   play.",
            initialBoard: "5b2/5k2/8/4P3/5P2/5K2/4B3/8 w - - 0 1"
        },
        {
            actions: "1. Bc4+    Ke7\n2. Ke4!    Bg7\n3. Kf5        Bh6\n4. Kg4!    Ke8\n5. f5        Ke7\n6. f6+        Ke8\n7. e6",
            comment: "White wins easily.",
            initialBoard: "5b2/5k2/8/4P3/5P2/5K2/4B3/8 w - - 0 1"
        },
        {
            actions: "1. Bc4+    Ke7\n2. Ke4!    Bg7\n3. Kf5        Bh6\n4. Kg4!    Bf8\n5. Kg5        Bg7\n6. Kg6        Kf8\n7. Kh7",
            comment: "wins the Bishop.",
            initialBoard: "5b2/5k2/8/4P3/5P2/5K2/4B3/8 w - - 0 1"
        },
        {
            actions: "1. Bc4+    Ke7\n2. Ke4!    Bg7\n3. Kf5        Bh6\n4. Kg4!    Bf8\n5. Kg5    Bg7\n6. Kg6        Bh8\n7. Kh7",
            comment: " cornering the Bishop  literally and figuratively. ",
            initialBoard: "5b2/5k2/8/4P3/5P2/5K2/4B3/8 w - - 0 1"
        }
    ],
    "169": [
        {
            actions: "1. Ke2  Kg4 \n2. Be1  Bd6 \n3. f3+  Kf4 \n4. g3+  Kf5 \n5. g4+  Ke6 \n6. Kd3  Kd5 \n7. Bd2  Bc7 \n8. f4 Bb6 \n9. Bc3  Bc5 \n10. g5  Bb6 \n11. g6  Ke6 \n12. Ke4 Bd8 \n13. f5+ Ke7 \n14. Kd5 Kf8 \n15. Ke6 Bg5 \n16. f6  Be3 \n17. Bb4+ ",
            initialBoard: "8/8/8/4bk2/8/8/3B1PP1/5K2 w - - 0 1"
        },
        {
            actions: "1. Ke2        Kg4\n2. f3+        Kg3",
            comment: "time will be lost  evicting the King.",
            initialBoard: "8/8/8/4bk2/8/8/3B1PP1/5K2 w - - 0 1"
        },
        {
            actions: "1. Ke2        Kg4\n2. Be1        Bd6\n3. f3+        Kf4\n4. g3+        Kf5\n5. g4+        Kf4\n6. Bd2+    Kg3\n7. g5        Be5\n8. g6        Bg7\n9. Bh6\n10. g7",
            comment: "White wins. ",
            initialBoard: "8/8/8/4bk2/8/8/3B1PP1/5K2 w - - 0 1"
        },
        {
            actions: "1. Ke2        Kg4\n2. Be1        Bd6\n3. f3+        Kf4\n4. g3+        Kf5\n5. g4+        Kf4\n6. Bd2+    Kg3\n7. g5        Be5\n8. g6        Bg7\n9. Ke3        Bh6+\n10. Ke4        Bg7\n11. Bf4+    Kg2\n12. Be5",
            comment: "is decisive. ",
            initialBoard: "8/8/8/4bk2/8/8/3B1PP1/5K2 w - - 0 1"
        },
        {
            actions: "1. Ke2        Kg4\n2. Be1        Bd6\n3. f3+        Kf4\n4. g3+        Kf5\n5. g4+        Kf4\n6. Bd2+    Kg3\n7. g5        Be5\n8. g6        Bg7\n9. Ke3        Kh4\n10. Ke4    Kh5\n11. Kf5    Bd4\n12. Bg5    Bg7\n13. Bf6    Bf8\n14. g7 ",
            comment: "wins for White.",
            initialBoard: "8/8/8/4bk2/8/8/3B1PP1/5K2 w - - 0 1"
        },
        {
            actions: "1. Ke2        Kg4\n2. Be1        Bd6\n3. f3+        Kf4\n4. g3+        Kf5\n5. g4+        Ke6\n6. Kd3        Kd5\n7. Bd2        Bc7\n8. f4        Bb6\n9. Bc3        Bc5\n10. g5        Bb6\n11. g6        Ke6\n12. Ke4    Bd8\n13. f5+        Ke7\n14. Kd5    Bc7\n15. f6+    Kf8\n16. Bb4+    Kg8\n17. f7+",
            comment: "and White wins.",
            initialBoard: "8/8/8/4bk2/8/8/3B1PP1/5K2 w - - 0 1"
        }
    ],
    "17": [
        {
            actions: "1. a4 Ke4 \n2. a5 Kd5 \n3. a6 Kd6 \n4. a7 Kc7 \n5. a8=Q",
            initialBoard: "8/8/2p5/8/8/P4k2/8/2K5 w - - 0 1"
        },
        {
            actions: "1. a4    Ke4\n2. a5    Kd5\n3. a6    Kd6\n4. a7    Kc7\n5. a8=Q",
            comment: "White wins",
            initialBoard: "8/8/2p5/8/8/P4k2/8/2K5 w - - 0 1"
        }
    ],
    "170": [
        {
            actions: "1. Bf1  Bg4 \n2. h4 Bf5 \n3. Kf2  Bg4 \n4. Ke3  Be6 \n5. Kf4  Bd7 \n6. Bd3  Bh3 \n7. Bf5  Bf1 \n8. g4 Be2 \n9. g5+  Kh5 \n10. Kg3!  Bd1 \n11. Be4 Bb3 \n12. Bf3+  Kg6 \n13. Kf4 Bf7 \n14. h5+ Kg7 \n15. Ke5 Bb3 \n16. Be4 Bf7 \n17. h6+ Kh8 \n18. Kf6 Bh5 \n19. Bd5 Kh7 \n20. Bf7 Be2 \n21. g6+ ",
            initialBoard: "8/8/7k/8/8/6Pb/4B2P/6K1 w - - 0 1"
        },
        {
            actions: "1. Bf1     Bg4\n2. h4         Bf5\n3. Kf2     Bg4\n4. Ke3     Be6\n5. Kf4     Bd7\n6. g4         Be8\n7. Be2     Bf7\n8. g5+     Kh7",
            comment: "which results in a Rook Pawn- Bishop of the wrong color controlling the Pawn’s Queening square.",
            initialBoard: "8/8/7k/8/8/6Pb/4B2P/6K1 w - - 0 1"
        },
        {
            actions: "1. Bf1        Bg4\n2. h4        Bf5\n3. Kf2    Bg4\n4. Ke3    Be6\n5. Kf4    Bd7\n6. Bd3    Bh3\n7. Bf5        Bf1\n8. g4        Be2\n9. h4        Bxg4",
            comment: "forcing a draw.",
            initialBoard: "8/8/7k/8/8/6Pb/4B2P/6K1 w - - 0 1"
        },
        {
            actions: "1. Bf1        Bg4\n2. h4        Bf5\n3. Kf2    Bg4\n4. Ke3    Be6\n5. Kf4    Bd7\n6. Bd3    Bh3\n7. Bf5        Bf1\n8. g4         Be2\n9. g5+     Kg7\n10. Bg4     Bxg4\n11. h5",
            comment: "and a draw.",
            initialBoard: "8/8/7k/8/8/6Pb/4B2P/6K1 w - - 0 1"
        },
        {
            actions: "1. Bf1        Bg4\n2. h4        Bf5\n3. Kf2    Bg4\n4. Ke3    Be6\n5. Kf4    Bd7\n6. Bd3    Bh3\n7. Bf5        Bf1\n8. g4         Be2\n9. g5+     Kg7\n10. g6        Kh6\n11. Ke5    Bh5\n12. Kf6    Bxg6\n13. Bxg6",
            comment: "stalemate.",
            initialBoard: "8/8/7k/8/8/6Pb/4B2P/6K1 w - - 0 1"
        },
        {
            actions: "1. Bf1        Bg4\n2. h4        Bf5\n3. Kf2        Bg4\n4. Ke3        Be6\n5. Kf4        Bd7\n6. Bd3        Bh3\n7. Bf5        Bf1\n8. g4        Be2\n9. g5+        Kh5\n10. Kg3!        Bd1\n11. Be4        Bb3\n12. Bf3+        Kg6\n13. Kf4        Bf7\n14. h5+        Kg7\n15. Ke5        Bb3\n16. Be4        Bf7\n17. h6+        Kh8\n18. Kf6        Bh5\n19. g6        Bxg6",
            comment: "and a draw. ",
            initialBoard: "8/8/7k/8/8/6Pb/4B2P/6K1 w - - 0 1"
        },
        {
            actions: "1. Bf1        Bg4\n2. h4        Bf5\n3. Kf2        Bg4\n4. Ke3        Be6\n5. Kf4        Bd7\n6. Bd3        Bh3\n7. Bf5        Bf1\n8. g4        Be2\n9. g5+        Kh5\n10. Kg3!    Bd1\n11. Be4        Bb3\n12. Bf3+    Kg6\n13. Kf4        Bf7\n14. h5+        Kg7\n15. Ke5        Bb3\n16. Be4        Bf7\n17. h6+        Kh8\n18. Kf6        Bh5\n19.  Bg6",
            comment: "Driving off Black's Bishop, since it  blocks the Knight Pawn.",
            initialBoard: "8/8/7k/8/8/6Pb/4B2P/6K1 w - - 0 1"
        }
    ],
    "171": [
        {
            actions: "1. f4+   Kd6 \n2. f5  Ke5 \n3. d4+   Kf6 \n4. Kf4   Bb3 \n5. Bc6   Bc2 \n6. Bd7   Bb3 \n7. Ke4   Bc4 \n8. d5  Bb3 \n9. Be6   Bc4 \n10. Kd4  Be2 \n11. d6   Bb5 \n12. d7   Ke7 \n13. f6+  Kd8 \n14. f7   Ke7 \n15. f8=Q+ Kxf8 \n16. d8=Q+ ",
            initialBoard: "8/5b2/8/4k3/4B3/3PKP2/8/8 w - - 0 1"
        },
        {
            actions: "1. f4+        Kd6\n2. f5        Ke5\n3. d4+        Kf6\n4. Kf4        Bb3\n5. Bc6        Bc2\n6. Bd7        Bb3\n7. Ke4        Bc2+\n8. Kd5        Bxf5\n9. Bxf5    Kxf5\n10. Kc6",
            comment: "wins for White.",
            initialBoard: "8/5b2/8/4k3/4B3/3PKP2/8/8 w - - 0 1"
        },
        {
            actions: "1. f4+        Kd6\n2. f5        Ke5\n3. d4+        Kf6\n4. Kf4        Bb3\n5. Bc6        Bc2\n6. Bd7        Bb3\n7. Ke4        Bc4\n8. d5        Bb3\n9. Be6        Bc4\n10. Kd4        Ba2\n11. Kc5    Bb3\n12. d6",
            comment: "White wins.",
            initialBoard: "8/5b2/8/4k3/4B3/3PKP2/8/8 w - - 0 1"
        }
    ],
    "172": [
        {
            actions: "1. Kg5  Ng4 \n2. Kxf5 Nxe5 \n3. Ke6! Nd7 \n4. Bh5#",
            initialBoard: "4k3/4P3/8/4Pp2/7K/8/4B2n/8 w - - 0 1"
        },
        {
            actions: "1. Kg5        Kxe7\n2. Kxf5    Kf7\n3. e6+        Ke7\n4. Ke5        Ke8\n5. Kf6        Kf8\n6. e7+        Ke8\n7. Bb5#",
            comment: "",
            initialBoard: "4k3/4P3/8/4Pp2/7K/8/4B2n/8 w - - 0 1"
        },
        {
            actions: "1. Kg5        Ng4\n2. Bxg4    fxg4\n3. Kxg4    Kxe7\n4. Kf5        Kf7\n5. e6+        Ke7!\n6. Ke5        Ke8!\n7. Kf6        Kf8\n8. e7+        Ke8\n9. Ke6",
            comment: "Black draws by  stalemate.",
            initialBoard: "4k3/4P3/8/4Pp2/7K/8/4B2n/8 w - - 0 1"
        }
    ],
    "173": [
        {
            actions: "1. Kh6  Bf7 \n2. Bd3  Be6 \n3. g5 Bg8 \n4. Bxh7!  Bxh7 \n5. g6 Bxg6 \n6. Kxg6 Kg8 \n7. Kf6  Kf8 \n8. Ke6  Ke8 \n9. Kd6  Kd8 \n10. Kc6 Kc8 \n11. Kxb6  Kb8 \n12. c5  Kc8 \n13. Kc6! ",
            initialBoard: "4b2k/7p/1p6/6K1/2P1B1P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kh6        Bf7\n2. Bxh7    Bxc4",
            comment: "Black's Bishop’s  sacrifice for the remaining  Pawn: draws.",
            initialBoard: "4b2k/7p/1p6/6K1/2P1B1P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kh6        Bf7\n2. Bd3        Kg8",
            comment: "White takes the Rook  Pawn with check.",
            initialBoard: "4b2k/7p/1p6/6K1/2P1B1P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kh6        Bf7\n2. Bd3        Bg8\n3. g5        Bf7\n4. Bxh7    Bxc4\n5. g6        Bg8\n6. g7#",
            comment: "",
            initialBoard: "4b2k/7p/1p6/6K1/2P1B1P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kh6        Bf7\n2. Bd3        Be6\n3. g5        Bg8\n4. Bxh7!    Bxc4\n5. g6",
            comment: "mate next move.",
            initialBoard: "4b2k/7p/1p6/6K1/2P1B1P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kh6        Bf7\n2. Bd3        Be6\n3. g5        Bg8\n4. Bxh7!    Bxh7\n5. g6        Bg8\n6. g7#",
            comment: "",
            initialBoard: "4b2k/7p/1p6/6K1/2P1B1P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kh6        Bf7\n2. Bd3        Be6\n3. g5        Bg8\n4. Bxh7!    Bxh7\n5. g6        Kg8\n6. gxh7+    Kh8\n7. Kg6        b5\n8. c5        b4\n9. c6        b3\n10. c7        b2\n11. c8=Q#",
            comment: "",
            initialBoard: "4b2k/7p/1p6/6K1/2P1B1P1/8/8/8 w - - 0 1"
        }
    ],
    "174": [
        {
            actions: "1. g7 e1=Q \n2. g8=Q Kb7\n3. Qb3+ Kc6 \n4. Qb6+ Kd5 \n5. Qb5! Qc1 \n6. Be3+",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Qa5\n3. Kd7+    Kb7\n4. Qc8# ",
            comment: "",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q        Qh4+\n3. Kc7+         Qd8\n4. Qxd8#",
            comment: "",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Kb7\n3. Qb3+    Kc6\n4. Qb6+    Kd5\n5. Qb5!    Ke6\n6. Qe8+ ",
            comment: "winning the Queen.",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Kb7\n3. Qb3+    Kc6\n4. Qb6+    Kd5\n5. Qb5!    Ke4\n6. Qe8+ ",
            comment: "winning the Queen.",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Kb7\n3. Qb3+    Kc6\n4. Qb6+    Kd5\n5. Qb5!    Qe6\n6. Qb3+ ",
            comment: "winning the Queen.  ",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Kb7\n3. Qb3+    Kc6\n4. Qb6+    Kd5\n5. Qb5!    Qe4\n6. Qb7+ ",
            comment: "winning the Queen.",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Kb7\n3. Qb3+    Kc6\n4. Qb6+    Kd5\n5. Qb5!    Qh4+\n6. Be7+ ",
            comment: "winning the Queen.  ",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Kb7\n3. Qb3+    Kc6\n4. Qb6+    Kd5\n5. Qb5!    Qg3\n6. Bf2+  ",
            comment: "winning the Queen.  ",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Kb7\n3. Qb3+    Kc6\n4. Qb6+    Kd5\n5. Qb5!    Qc3\n6. Bb4+  ",
            comment: "winning the Queen.  ",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Kb7\n3. Qb3+    Kc6\n4. Qb6+    Kd5\n5. Qb5!    Qd2\n6. Qd7+  ",
            comment: "winning the Queen.  ",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Kb7\n3. Qb3+    Kc6\n4. Qb6+    Kd5\n5. Qb5!    Qh1\n6. Qb7+  ",
            comment: "winning the Queen.  ",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Kb7\n3. Qb3+    Kc6\n4. Qb6+    Kd5\n5. Qb5!    Qd1\n6. Qd7+",
            comment: "winning the Queen.  ",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Kb7\n3. Qb3+    Kc6\n4. Qb6+    Kd5\n5. Qb5!    Qc1\n6. Be3+",
            comment: "winning the Queen.  ",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        },
        {
            actions: "1. g7        e1=Q\n2. g8=Q    Kb7\n3. Qb3+    Kc6\n4. Qb6+    Kd5\n5. Qb5!    Qa1\n6. Bd4+    Kxd4\n7. Qe5+",
            comment: "winning the Queen.",
            initialBoard: "k2K4/8/6P1/2B5/5P2/p7/4p2b/8 w - - 0 1"
        }
    ],
    "175": [
        {
            actions: "1. a7 Nc6 \n2. Kb7  Nxa7 \n3. Bc3+ b4 \n4. Bd4  Nb5 \n5. Bxb6# ",
            initialBoard: "K7/8/Pp6/kp6/1n6/1P6/8/B7 w - - 0 1"
        },
        {
            actions: "1. Bc3    Kxa6\n2. Bxb4",
            comment: "Black has been stalemated.",
            initialBoard: "K7/8/Pp6/kp6/1n6/1P6/8/B7 w - - 0 1"
        },
        {
            actions: "1. a7        Ka6\n2. Kb8    Nc6+\n3. Kc7        Nxa7\n4. b4        Nc8\n5. Kxc8    Ka7\n6. Kc7        Ka6\n7. Kc6        Ka7\n8. Kxa6",
            comment: "and White wins.",
            initialBoard: "K7/8/Pp6/kp6/1n6/1P6/8/B7 w - - 0 1"
        },
        {
            actions: "1. a7        Nc6\n2. Kb7    Nxa7\n3. Kxa7    Kb4\n4. Kxb6    Kxb3",
            comment: "and Black draws.",
            initialBoard: "K7/8/Pp6/kp6/1n6/1P6/8/B7 w - - 0 1"
        }
    ],
    "176": [
        {
            actions: "1. Ba3  f5 \n2. d5!  cxd5 \n3. a5 Nf6 \n4. a6 Ne8 \n5. Bd6! Nxd6 \n6. a7 ",
            initialBoard: "6n1/7k/2p2p2/8/P2P4/8/8/2B4K w - - 0 1"
        }
    ],
    "177": [
        {
            actions: "1. Bh5! Kg3 \n2. Bxg6!  Kf4 \n3. h7 Rc8 \n4. Be8! Rxe8 \n5. g6 ",
            initialBoard: "8/8/2r3pP/6P1/8/K7/7k/3B4 w - - 0 1"
        }
    ],
    "178": [
        {
            actions: "1. e8=Q Rxe8 \n2. Bf8  Re2+ \n3. Kh3! Re3+ \n4. Kh4  Re4+ \n5. Kh5  Re5+ \n6. Kh6  Re1 \n7. Bc5! Re8 \n8. Kxh7 Rd8 \n9. Be7! Rc8 \n10. Bf8 Rc7 \n11. Bd6! ",
            initialBoard: "1kr5/4P1Pp/8/8/8/B7/7K/8 w - - 0 1"
        }
    ],
    "179": [
        {
            actions: "1. a7 Bd5 \n2. c4 Bb7 \n3. Bf3  Bxf3 \n4. d5 ",
            initialBoard: "4k3/4p3/P2p4/8/2bP4/p7/2P5/K2B4 w - - 0 1"
        }
    ],
    "18": [
        {
            actions: "1. Ke6    Kc3 \n2. Kd5!  Kb4 \n3. Kc6    Kc4 \n4. Kb7    Kb5 \n5. Kxa7 Kc6 \n6. Kb8 ",
            initialBoard: "8/p4K2/P7/8/8/8/1k6/8 w - - 0 1"
        },
        {
            actions: "1. Ke7     Kc3\n2. Kd7     Kd4\n3. Kc7     Kc5\n4. Kb7     Kd6\n5. Kxa7     Kc7\n6. Ka8     Kc8",
            comment: "and Black  gets a draw.",
            initialBoard: "8/p4K2/P7/8/8/8/1k6/8 w - - 0 1"
        }
    ],
    "180": [
        {
            actions: "1. b3+  Kxb3 \n2. c4 Be8 \n3. Bf3  e4 \n4. Bh5! Bc6 \n5. Bf7  Ba8 \n6. Bd5  c6 \n7. c5+! cxd5 \n8. cxb6 ",
            initialBoard: "8/2p2b2/Pp1p4/4pp2/k7/2P5/1P2BPK1/8 w - - 0 1"
        }
    ],
    "181": [
        {
            actions: "1. Kc6  d3 \n2. Kc5  Ke3 \n3. Kc4  d2 \n4. Kc3  Ke2 \n5. Ra2 ",
            initialBoard: "8/1K6/8/8/3pk3/8/8/R7 w - - 0 1"
        }
    ],
    "182": [
        {
            actions: "1. Kb7  h5 \n2. Kc6  h4 \n3. Kd5  Kg4 \n4. Ke4  Kg3 \n5. Ke3  h3 \n6. Rg8+ Kh2 \n7. Kf2  Kh1 \n8. Ra8  Kh2 \n9. Rh8  Kh1 \n10. Rxh3# ",
            initialBoard: "K6R/8/7p/6k1/8/8/8/8 w - - 0 1"
        }
    ],
    "183": [
        {
            actions: "1. Kb7  g5 \n2. Kc6  g4 \n3. Kd5  Kf4 \n4. Kd4  Kf3 \n5. Kd3  g3 \n6. Rf8+ Kg2 \n7. Ke2  Kg1 \n8. Rg8  g2 \n9. Kf3  Kh1 \n10. Kf2 ",
            initialBoard: "K5R1/8/6p1/5k2/8/8/8/8 w - - 0 1"
        }
    ],
    "184": [
        {
            actions: "1. Rg1+ Kf5 \n2. Rh1  Kg6 \n3. Kb2  h5 \n4. Kc3  Kg5 \n5. Kd2  h4 \n6. Ke2  Kg4 \n7. Kf2  h3 \n8. Rh2  Kh4 \n9. Kf3 ",
            initialBoard: "8/7p/8/8/6k1/8/8/KR6 w - - 0 1"
        }
    ],
    "185": [
        {
            actions: "1. Rg8+ Kf3 \n2. Rh8  Kg4 \n3. Kb2  h4 \n4. Kc2  h3 \n5. Kd2  Kg3 \n6. Ke2! Kg2 \n7. Rg8+ Kh1 \n8. Kf3  h2 \n9. Kg3! Kg1 \n10. Kh3+  Kh1 \n11. Rd8 Kg1 \n12. Rd1+ ",
            initialBoard: "1R6/8/8/7p/6k1/8/8/K7 w - - 0 1"
        }
    ],
    "186": [
        {
            actions: "1. Rb6! Ka2 \n2. Ke6  a3 \n3. Kd5  Ka1 \n4. Kc4  a2 \n5. Kb3! Kb1 \n6. Ka3+ Ka1 \n7. Re6  Kb1 \n8. Re1+ ",
            initialBoard: "8/5K2/R7/8/p7/k7/8/8 w - - 0 1"
        }
    ],
    "187": [
        {
            actions: "1. Rf8+ Kg6 \n2. Rf6+ Kh5 \n3. Ke6  g4 \n4. Kf5  g3 \n5. Rg6  Kh4 \n6. Rh6# ",
            initialBoard: "3R4/4K3/8/5kp1/8/8/8/8 w - - 0 1"
        }
    ],
    "188": [
        {
            actions: "1. Rc7+ Kg8 \n2. Rg7+ Kh8 \n3. Rb7  a3 \n4. Kg6  b1=Q+\n5. Rxb1 a2\n6. Rb8#      ",
            initialBoard: "2R5/7k/5K2/8/p7/8/1p6/8 w - - 0 1"
        }
    ],
    "189": [
        {
            actions: "1. Rg6! Kd7 \n2. Rg4! g2 \n3. Rxg2 Ke6 \n4. Rg5! Kf6 \n5. Rc5  Ke6 \n6. Kb7  Kf6 \n7. Kb6  Ke6 \n8. Kb5  Kf6 \n9. Kc4  Ke6 \n10. Kd3 Kf6 \n11. Ke4 ",
            initialBoard: "K7/2k5/R7/8/5p2/6p1/8/8 w - - 0 1"
        }
    ],
    "19": [
        {
            actions: "1. b5 Ke5 \n2. b6!  Kd6 \n3. Kb5  h4 \n4. Ka6  h3 \n5. b7 Kc7 \n6. Ka7  h2 \n7. b8=Q+",
            initialBoard: "8/8/8/7p/1PK2k2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. b5    h4\n2. b6    h3\n3. b7    h2\n4. b8=Q+",
            comment: "with Pawn loss Black loses.",
            initialBoard: "8/8/8/7p/1PK2k2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. b5    Ke5\n2. Kc5     Ke6\n3. b6     Kd7",
            comment: "is a draw.",
            initialBoard: "8/8/8/7p/1PK2k2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. b5    Ke5\n2. Kc5     Ke6\n3. Kc6     h4\n4. b6    h3\n5. b7    h2\n6. b8=Q h1=Q",
            comment: "Position is a draw.",
            initialBoard: "8/8/8/7p/1PK2k2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. b5    Ke5\n2. b6!    Kd6\n3. Kb5    Kd7\n4. Ka6    Kc8\n5. Ka7",
            comment: "White wins.",
            initialBoard: "8/8/8/7p/1PK2k2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. b5    Ke5\n2. b6!    Kd6\n3. Kb5    h4\n4. b7    Kc7\n5. Ka6    Kb8",
            comment: "and White loses. ",
            initialBoard: "8/8/8/7p/1PK2k2/8/8/8 w - - 0 1"
        }
    ],
    "190": [
        {
            actions: "1. Rd2+ Kb1 \n2. Kc3  Kc1 \n3. Ra2  Kd1 \n4. Kd3  Kc1 \n5. Ke3  h2 \n6. Ra1+ Kb2 \n7. Rh1  g2 \n8. Rxh2 ",
            initialBoard: "8/8/8/3R4/2K5/6pp/k7/8 w - - 0 1"
        }
    ],
    "191": [
        {
            actions: "1. Rh2  a3 \n2. Ke5  a2 \n3. Kd4  Kb1 \n4. Kc3  a1=N \n5. Rb2+ Kc1 \n6. Ra2  Kb1 \n7. Rxa6 Nc2 \n8. Re6! Na3 \n9. Re1+ Ka2 \n10. Re2+  Ka1 \n11. Kb3 Nb1 \n12. Ra2#",
            initialBoard: "8/8/p4K1R/8/p7/8/8/k7 w - - 0 1"
        }
    ],
    "192": [
        {
            actions: "1. Rg5+ Kf8 \n2. Rh5  Bc7 \n3. Kd7  Bb6 \n4. Rb5  Ba7 \n5. Ra5  Bb6 \n6. Ra8+ Kf7 \n7. Kc6 ",
            initialBoard: "6k1/8/4K3/3R4/3p4/8/7b/8 w - - 0 1"
        }
    ],
    "193": [
        {
            actions: "1. Re1+ Kb2 \n2. Ra1! Kb3 \n3. Kd2  Kb2 \n4. Kd1  Kxa1 \n5. Kc2  a5 \n6. b6 a4 \n7. b7 a3 \n8. Kc3! Kb1 \n9. b8=Q+  Kc1 \n10. Qf4+  Kd1\n11. Qf1# ",
            initialBoard: "8/p7/8/1P6/8/3K4/p3R3/1k6 w - - 0 1"
        }
    ],
    "194": [
        {
            actions: "1. Kd6! d2 \n2. Kc7  d1=Q \n3. Ra6+ bxa6 \n4. b6+  Ka8 \n5. b7+  Ka7 \n6. b8=Q# ",
            initialBoard: "8/kp6/4R3/1P2K3/8/3pp3/8/8 w - - 0 1"
        }
    ],
    "195": [
        {
            actions: "1. Rg5  h3 \n2. Rg4+ b4+ \n3. Kc4  h2 \n4. Rg3  g1=Q \n5. Ra3+!  bxa3 \n6. b3#",
            initialBoard: "8/8/8/pp5R/k6p/2K5/1P4p1/8 w - - 0 1"
        }
    ],
    "196": [
        {
            actions: "1. Rf7  Bb1 \n2. g5 Ba2 \n3. Ra7+ Kb3 \n4. Kc1 ",
            initialBoard: "5Rn1/7b/8/8/k5P1/8/3K4/8 w - - 0 1"
        }
    ],
    "197": [
        {
            actions: "1. e7 Re4 \n2. Rh3+ Kb4 \n3. Rh4! Rxh4 \n4. e8=Q",
            initialBoard: "8/8/4P2R/8/1r6/k7/8/K7 w - - 0 1"
        }
    ],
    "198": [
        {
            actions: "1. h6  Kf6 \n2. h7  Kg7 \n3. h8=Q+! Kxh8 \n4. Kg4+ ",
            initialBoard: "8/8/8/4kr1P/7K/8/8/7R w - - 0 1"
        }
    ],
    "199": [
        {
            actions: "1. d5!  Ka5 \n2. Kd4  Ka6 \n3. Ke5  Re8+ \n4. Kf6  Rd8 \n5. Ke6  Re8+ \n6. Kd7  Rh8 \n7. d6 Rh7+ \n8. Kc6  Ka5 \n9. d7 Rh8 \n10. Kc7 Rh7 \n11. Kc8",
            initialBoard: "3r4/8/8/8/k2P4/3K4/8/1R6 w - - 0 1"
        }
    ],
    "2": [
        {
            actions: "1. Kf5! Ke3 \n2. Ke5! Kd3 \n3. Kd5! Kc3?? \n4. Kc5! Kd3 \n5. a4 Kc3 \n6. a5 Kb3 \n7. a6 Ka4 \n8. a7 Ka5 \n9. a8=Q# ",
            initialBoard: "8/8/8/6K1/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. a4     Ke4 \n2. a5   Kd5 \n3. a6    Kc6 \n4. a7    Kb7",
            comment: "White loses Pawn or Queen for draw.",
            initialBoard: "8/8/8/6K1/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf5!    Ke3\n2. a4    Kd4\n3. a5    Kc5\n4. a6    Kb6",
            comment: "White King’s lost tempo and Pawn draws.",
            initialBoard: "8/8/8/6K1/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf5!    Ke3\n2. Ke5!    Kd3\n3. a4    Kc4\n4. a5    Kb5",
            comment: "and Black draws with cut-in.",
            initialBoard: "8/8/8/6K1/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf5!   Ke3\n2. Ke5!  Kd3\n3. Kd5!  Kc3\n4. a4       Kb4",
            comment: "nails down Pawn and draws.   ",
            initialBoard: "8/8/8/6K1/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf5!  Ke3\n2. Ke5!  Kd3\n3. Kd5!  Kc3\n4. Kc5!  Kd3\n5. a4     Kc3\n6. a5     Kb3\n7. a6     Ka4\n8. a7     Ka5",
            comment: "too late Black, loses   with  9 a8=Q#.",
            initialBoard: "8/8/8/6K1/8/5k2/P7/8 w - - 0 1"
        }
    ],
    "20": [
        {
            actions: "1. e6 Kf6\n2. Kd6 g3\n3. e7 g2\n4. e8=Q g1=Q\n5. Qf8+ Kg5\n6. Qg8+",
            initialBoard: "8/8/8/3KP1k1/6p1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. e6    g3\n2. e7    g2\n3. e8=Q g1=Q\n4. Qg8+",
            comment: "Black’s Queen comes off the board.",
            initialBoard: "8/8/8/3KP1k1/6p1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. e6    Kf6\n2. Kd6    g3\n3. e7    Kf7\n4. Kd7",
            comment: "threat of Queening with check wins for White.",
            initialBoard: "8/8/8/3KP1k1/6p1/8/8/8 w - - 0 1"
        }
    ],
    "200": [
        {
            actions: "1. Kb8  Rb2+ \n2. Kc8  Ra2 \n3. Rg6+ Kc5 \n4. Kb7  Rb2+ \n5. Kc7  Ra2 \n6. Rg5+ Kc4 \n7. Kb7  Rb2+ \n8. Kc6  Ra2 \n9. Rg4+ Kc3 \n10. Kb6 Rb2+ \n11. Kc5 Ra2 \n12. Rg3+  Kc2 \n13. Rg2+  Kb3 \n14. Rxa2  Kxa2 \n15. a8=Q+ ",
            initialBoard: "K7/P5R1/2k5/8/8/8/2r5/8 w - - 0 1"
        }
    ],
    "201": [
        {
            actions: "1. Kf4  Kf2 \n2. Ke4  Ke2 \n3. Kd4  Kd2 \n4. Kc5  Kc3 \n5. Rc8! Rxa7 \n6. Kb6+ ",
            initialBoard: "R7/P7/8/8/6K1/8/6k1/r7 w - - 0 1"
        }
    ],
    "202": [
        {
            actions: "1. Rc8  Kd6 \n2. Rb8  Rh1 \n3. Kb7  Rb1+ \n4. Kc8  Rc1+ \n5. Kd8  Rh1 \n6. Rb6+ Kc5 \n7. Rc6+!  Kb5 \n8. Rc8  Rh8+ \n9. Kc7  Rh7+ \n10. Kb8",
            initialBoard: "K7/P3k3/8/8/8/8/2R5/1r6 w - - 0 1"
        }
    ],
    "203": [
        {
            actions: "1. a7 Rb1+ \n2. Ka6  Ra1+ \n3. Kb6  Rb1+ \n4. Kc5  Ra1 \n5. Rh8  Rxa7 \n6. Rh7+ ",
            initialBoard: "R7/1K1k4/P7/8/8/8/8/2r5 w - - 0 1"
        }
    ],
    "204": [
        {
            actions: "1. Kb5  Rb8+ \n2. Kc6  Rc8+ \n3. Kb7  Rc1 \n4. a6 Rb1+ \n5. Kc6  Rc1+ \n6. Kb5  Rb1+ \n7. Ka4  Rb8 \n8. Ka5  Ra8 \n9. Kb6  Rb8+ \n10. Kc7 Rb1 \n11. Ra3 Rc1+ \n12. Kb6 Rb1+ \n13. Ka5 Rb8 \n14. a7  Ra8 \n15. Kb6 ",
            initialBoard: "r7/8/4k3/P7/K7/3R4/8/8 w - - 0 1"
        }
    ],
    "205": [
        {
            actions: "1. Kb4  Re7 \n2. Ra3  Ke8 \n3. a5 Kd8 \n4. a6 Ra7 \n5. Kb5  Kc8 \n6. Rh3  Kb8 \n7. Rh8+ Kc7 \n8. Rg8  Kd6 \n9. Kb6  Rf7 \n10. a7 ",
            initialBoard: "8/r4k2/8/8/P7/K3R3/8/8 w - - 0 1"
        }
    ],
    "206": [
        {
            actions: "1. Rh7+ Kg5 \n2. g7 Ra8+ \n3. Kf7  Ra7+ \n4. Ke6  Ra6+ \n5. Kd5! Rg6 \n6. Ke5! Kg4 \n7. Rh1  Kg5 \n8. Rg1+ Kh6 \n9. Rxg6+  Kxg6 \n10. g8=Q+ ",
            initialBoard: "6K1/6R1/r5P1/8/7k/8/8/8 w - - 0 1"
        }
    ],
    "207": [
        {
            actions: "1. Kb2   Rb8 \n2. Rb3   Kf7 \n3. Ka3!  Ke7 \n4. Ka4   Kd7 \n5. Kb5   Kc8 \n6. Rc3+ Kb7 \n7. Rc7+ Ka8 \n8. Ra7#! ",
            initialBoard: "7r/6k1/1P6/8/8/5R2/8/K7 w - - 0 1"
        }
    ],
    "208": [
        {
            actions: "1. Rd4! Ke6 \n2. Kc4! Rc8+ \n3. Kb5  Rb8+ \n4. Kc6  Rc8+ \n5. Kb7  Rf8 \n6. b5 ",
            initialBoard: "1r6/4k3/8/8/1P6/1K6/8/3R4 w - - 0 1"
        }
    ],
    "209": [
        {
            actions: "1. Kc3  Rc8+ \n2. Kd4  Rb8 \n3. Kc4  Rc8+ \n4. Kd5  Rb8 \n5. Rb1  Kf6 \n6. b4 Ke7 \n7. Kc6! Kd8 \n8. Rd1+ Kc8 \n9. Rh1  Kd8 \n10. Rh8+ ",
            initialBoard: "1r6/8/8/5k2/8/1P6/1K6/4R3 w - - 0 1"
        }
    ],
    "21": [
        {
            actions: "1. Kg5       b5 \n2. Kf4       Ke2 \n3. Ke4       Kd2 \n4. Kd4       Kc2 \n5. Kc5       Kc3 \n6. h5      b4 \n7. h6      b3 \n8. h7      b2 \n9. h8=Q+ Kc2 \n10. Qh2+   Kc1 \n11. Qf4+    Kc2 \n12. Qc4+    Kd2 \n13. Qb3      Kc1 \n14. Qc3+    Kb1 \n15. Kc4      Ka2 \n16. Qa5+    Kb1 \n17. Kb3      Kc1 \n18. Qe1# ",
            initialBoard: "8/1p6/7K/8/7P/8/5k2/8 w - - 0 1"
        },
        {
            actions: "1. Kg5    b5\n2. h5    b4",
            comment: "\tboth Pawns Queen \tleading to a draw.",
            initialBoard: "8/1p6/7K/8/7P/8/5k2/8 w - - 0 1"
        },
        {
            actions: "1. Kg5    b5\n2. Kf4    b4\n3. Ke4 ",
            comment: "catching the  Black Pawn.",
            initialBoard: "8/1p6/7K/8/7P/8/5k2/8 w - - 0 1"
        },
        {
            actions: "1. Kg5    b5\n2. Kf4    Ke2\n3. Ke4    b4",
            comment: "Pawn is caught, White wins.",
            initialBoard: "8/1p6/7K/8/7P/8/5k2/8 w - - 0 1"
        },
        {
            actions: "1. Kg5    b5\n2. Kf4    Ke2\n3. Ke4    Kd2\n4. Kd4    Kc2\n5. h5    b4\n6. h6    b3\n7. h7    b2\n8. h8=Q b1=Q ",
            comment: "Black draws. ",
            initialBoard: "8/1p6/7K/8/7P/8/5k2/8 w - - 0 1"
        },
        {
            actions: "1. Kg5    b5\n2. Kf4    Ke2\n3. Ke4    Kd2\n4. Kd4    Kc2\n5. Kc5    Kc3\n6. Kxb5    Kd4\n7. h5    Ke5",
            comment: "White Pawn’s loss  Is a smashing draw.",
            initialBoard: "8/1p6/7K/8/7P/8/5k2/8 w - - 0 1"
        }
    ],
    "210": [
        {
            actions: "1. Kd3! Rg4 \n2. Ke3  Rh4 \n3. d6 Rh6 \n4. Rd2! Rh8 \n5. d7 Rd8 \n6. Ke4  Kb7 \n7. Ke5  Kc7 \n8. Ke6  Rh8 \n9. Rc2+ Kb7 \n10. Rh2!  Rg8 \n11. Kf7 Ra8 \n12. Ke7 Kc7 \n13. d8=Q+ Rxd8 \n14. Rc2+  Kb7 \n15. Kxd8 ",
            initialBoard: "8/k7/8/3P4/7r/2K5/1R6/8 w - - 0 1"
        }
    ],
    "211": [
        {
            actions: "1. Ra1 Kf7 \n2. Ra8 Rc1 \n3. Rc8 Rd1 \n4. Kc7 Rc1+ \n5. Kb6 Rb1+ \n6. Kc5 ",
            initialBoard: "3K4/3P2k1/8/8/8/8/2r5/5R2 w - - 0 1"
        }
    ],
    "212": [
        {
            actions: "1. Ke6  Ra6+ \n2. Ke5! Ra5+ \n3. Kf6  Ra6+ \n4. Kg5  Ra5+ \n5. Kg6  Ra6+ \n6. Rf6  Ra8 \n7. Rd6 ",
            initialBoard: "6k1/r2KP3/8/8/8/8/8/5R2 w - - 0 1"
        }
    ],
    "213": [
        {
            actions: "1. Kd8  Rb8+ \n2. Kc7  Rb2 \n3. Re1  Rc2+ \n4. Kd7  Rd2+ \n5. Ke8  Ra2 \n6. e7 Ra8+ \n7. Kd7  Ra7+ \n8. Kc6",
            initialBoard: "8/1r2K3/4P1k1/8/8/8/8/R7 w - - 0 1"
        }
    ],
    "214": [
        {
            actions: "1. Kd3! Rb4 \n2. e6!  Rb6 \n3. Re1  Rb8 \n4. e7 Re8 \n5. Kd4  Kg7 \n6. Kd5  Kf7 \n7. Kd6  Ra8 \n8. Rf1+  Ke8\n9. Rf8# ",
            initialBoard: "8/8/7k/4P3/r7/4K3/8/6R1 w - - 0 1"
        }
    ],
    "215": [
        {
            actions: "1. Kd3! Rd8+ \n2. Kc4  Rc8+ \n3. Kd5  Rd8+ \n4. Ke5  Re8+ \n5. Kf6! Rf8+ \n6. Ke7  Rf5 \n7. e4!  Re5+ \n8. Kf6  Rh5 \n9. e5 Rh2 \n10. Rf1 Kh7 \n11. Kf7 ",
            initialBoard: "4r3/8/7k/8/8/4P3/4K3/6R1 w - - 0 1"
        }
    ],
    "216": [
        {
            actions: "1. Rd2+ Ke7 \n2. Rd6! Rc3 \n3. Rc6! Rxc6 \n4. Ka7 ",
            initialBoard: "1K6/1P1k4/1P6/8/8/r7/2R5/8 w - - 0 1"
        }
    ],
    "217": [
        {
            actions: "1. Kc4  Rxa6 \n2. a4!  Rxa4+ \n3. Kb3! ",
            initialBoard: "8/8/P7/8/3K4/r7/P2R4/k7 w - - 0 1"
        }
    ],
    "218": [
        {
            actions: "1. Rd8    Rxh3+ \n2. Rd3!   Rxd3+ \n3. Kc2!   Rd6! \n4. c8=N+! Kc6 \n5. Nxd6   Kxd6 \n6. Kb3    Kc6 \n7. Ka4    Kb6 \n8. Kb4    Kc6 \n9. Ka5 ",
            initialBoard: "2R5/2P5/1k6/8/7r/1K5P/1P6/8 w - - 0 1"
        }
    ],
    "219": [
        {
            actions: "1. Rh3+ Kg7 \n2. Rg3! Rxg3 \n3. a7 Rg1 \n4. Kb2  Rg2+ \n5. Kxb3 Rg3+ \n6. Kb4  Rg4+ \n7. Kb5  Rg5+ \n8. Kb6  Rg6+ \n9. Kb7 ",
            initialBoard: "8/8/P5rk/8/8/KpR5/8/8 w - - 0 1"
        }
    ],
    "22": [
        {
            actions: "1. f7   h2 \n2. f8=Q h1=Q \n3. Qf3+ Kg1 \n4. Qe3+ Kf1 \n5. Qc1+ Kg2 \n6. Qd2+ Kf1 \n7. Qd1+ Kg2 \n8. Qe2+ Kg1 \n9. Kg3!",
            initialBoard: "8/8/5P2/8/6K1/7p/6k1/8 w - - 0 1"
        },
        {
            actions: "1. f7    h2\n2. f8=Q    h1=Q\n3. Qf3+    Kh2",
            comment: "allows 4 Qg3#.",
            initialBoard: "8/8/5P2/8/6K1/7p/6k1/8 w - - 0 1"
        }
    ],
    "220": [
        {
            actions: "1. Rg1  Ra8 \n2. g7 Kh5 \n3. Kf3  Rg8 \n4. Kxf4 Kh6 \n5. Kf5  Kh7 \n6. Kf6  Ra8 \n7. Rh1+ Kg8 \n8. Rh8# ",
            initialBoard: "8/8/6P1/8/5p1k/r7/6K1/2R5 w - - 0 1"
        }
    ],
    "221": [
        {
            actions: "1. Rg1+ Kh7 \n2. e5!  Rxe5+ \n3. Kf7  Kh6 \n4. Kf6 ",
            initialBoard: "6k1/4K3/8/r4p2/4P3/8/8/5R2 w - - 0 1"
        }
    ],
    "222": [
        {
            actions: "1. Kg5! Kh3 \n2. Rh2+!  Kxh2 \n3. Kxh4 g3 \n4. c7 g2 \n5. c8=Q g1=Q \n6. Qh3# ",
            initialBoard: "8/8/2P2K2/8/6pr/6k1/R7/8 w - - 0 1"
        }
    ],
    "223": [
        {
            actions: "1. b7 Ra7 \n2. Re1+ Kd8 \n3. Re7! Kxe7 \n4. b8=Q ",
            initialBoard: "4k3/6K1/1P6/8/1p6/8/r7/6R1 w - - 0 1"
        }
    ],
    "224": [
        {
            actions: "1. Ke7! Ra8 \n2. Kd7! Rf8 \n3. Rf2! Ra8 \n4. Kc7 Rxa7+ \n5. Kc6 Ka5 \n6. Ra2+ ",
            initialBoard: "3r4/P4Kp1/k7/8/8/8/1R6/8 w - - 0 1"
        }
    ],
    "225": [
        {
            actions: "1. Kb8  Rb2+ \n2. Ka8  Rc2 \n3. Rf6+ Ka5 \n4. Kb8  Rb2+ \n5. Ka7  Rc2 \n6. Rf5+ Ka4 \n7. Kb7  Rb2+ \n8. Ka6  Rc2 \n9. Rf4+ Ka3 \n10. Kb6 Rb2+ \n11. Ka5 Rc2 \n12. Rf3+  Kb2 \n13. Rxf2  Rxf2 \n14. c8=Q ",
            initialBoard: "2K5/2P2R2/k7/8/8/8/2r2p2/8 w - - 0 1"
        }
    ],
    "226": [
        {
            actions: "1. Rf8  Rg5 \n2. Rf6+ Kh5 \n3. Rf5! Rxf5 \n4. Kg7  Rg5+ \n5. Kf7  Rf5+ \n6. Ke7  Re5+ \n7. Kd7  Rd5+ \n8. Kc7  Rc5+ \n9. Kb7  Rb5+ \n10. Ka7 ",
            initialBoard: "R6K/7P/p6k/r7/8/8/8/8 w - - 0 1"
        }
    ],
    "227": [
        {
            actions: "1. b7 Rh2+ \n2. Ke3  Rh3+ \n3. Ke4! Rb3 \n4. Rc2+ Kb5 \n5. b8=Q+",
            initialBoard: "8/8/1P6/8/2k3pr/8/3RK3/8 w - - 0 1"
        }
    ],
    "228": [
        {
            actions: "1. Rg1+ Kh2 \n2. Rg2+ Kh1 \n3. Kg3! Rh6 \n4. h8=Q!  Rxh8 \n5. Ra2 ",
            initialBoard: "8/6pP/6R1/7r/8/8/5K2/7k w - - 0 1"
        }
    ],
    "229": [
        {
            actions: "1. e7 Rc8 \n2. Rf8  Rc6+ \n3. Kf5  Re6! \n4. Kxe6 e2 \n5. Rf3+ Kd4 \n6. Rf4+ Kd3 \n7. Re4! Kxe4 \n8. e8=Q e1=Q \n9. Kf6+ ",
            initialBoard: "8/5R2/4PK2/2r5/8/2k1p3/8/8 w - - 0 1"
        }
    ],
    "23": [
        {
            actions: "1. Kc3!      Ka3 \n2. Kc4       Ka4 \n3. g4      b5+ \n4. Kd3!     Ka3 \n5. g5      b4 \n6. g6      b3 \n7. g7      b2 \n8. Kc2!      Ka2 \n9. g8=Q+ Ka1 \n10. Qa8# ",
            initialBoard: "8/8/1p6/8/8/6P1/k1K5/8 w - - 0 1"
        },
        {
            actions: "1. g4    b5\n2. g5    b4\n3. g6    b3+\n4. Kc3    b2\n5. g7    b1=Q\n6. g8=Q+ Ka1",
            comment: "\tand a draw.",
            initialBoard: "8/8/1p6/8/8/6P1/k1K5/8 w - - 0 1"
        },
        {
            actions: "1. Kc3    b5\n2. Kb4    Kb2\n3. g4",
            comment: "White wins easily.",
            initialBoard: "8/8/1p6/8/8/6P1/k1K5/8 w - - 0 1"
        },
        {
            actions: "1. Kc3    Ka3\n2. Kc4    Ka4\n3. g4    b5+\n4. Kd3!    Ka3\n5. g5    b4\n6. g6    b3\n7. g7    b2\n8. Kc2!    Ka2\n9. g8=Q+ Ka3",
            comment: "White mates  with 10 Qb3#. ",
            initialBoard: "8/8/1p6/8/8/6P1/k1K5/8 w - - 0 1"
        }
    ],
    "230": [
        {
            actions: "1. g7  Rd8 \n2. Re6+  Kf4 \n3. Rf6+  Kg3 \n4. Rg6+  Kh3 \n5. Kg1   Rg8 \n6. Kf2   Kh2 \n7. Rg4!  Kh3 \n8. Kf3   Kh2 \n9. Rxh4+ Kg1 \n10. Rh7  Rd8 \n11. Rh8 ",
            initialBoard: "8/8/2R3P1/8/7p/4k3/3r4/7K w - - 0 1"
        }
    ],
    "231": [
        {
            actions: "1. Kc3  Ka4 \n2. Rb4+ Ka5 \n3. Rg4! fxg4 \n4. g7 ",
            initialBoard: "8/8/1R4P1/5p2/3K4/k3p3/4r3/8 w - - 0 1"
        }
    ],
    "232": [
        {
            actions: "1. Kb8  Rc6 \n2. Rf6  c4 \n3. Rh6+ Kg2  \n4. Rxc6 dxc6 \n5. g6 c3 \n6. g7 c2\n7. g8=Q+ ",
            initialBoard: "K7/2rp4/8/2p3P1/8/8/5R2/7k w - - 0 1"
        }
    ],
    "233": [
        {
            actions: "1. Rb7+   Ka3 \n2. g7     Rg1 \n3. Rxc7   Kb4! \n4. Kh4     Rg5 \n5. Re7     Kc5 \n6. Re5+! Rxe5 \n7. g8=Q ",
            initialBoard: "8/R1p5/5pP1/8/8/7K/1k6/2r5 w - - 0 1"
        }
    ],
    "234": [
        {
            actions: "1. Kf7    Rxh5 \n2. Rg8+ Kh7 \n3. Rg7+ Kh8 \n4. Kg6    g4 \n5. Ra7    Rg5+ \n6. Kxh6 g3 \n7. Kxg5 g2 \n8. Ra1    f3 \n9. Kg6! ",
            initialBoard: "7k/8/4K1Rp/6pP/5p1r/8/8/8 w - - 0 1"
        }
    ],
    "235": [
        {
            actions: "1. e6!    fxe6 \n2. Kc6    a6 \n3. Rh8+ Ka7 \n4. Rh7+ Ka8 \n5. Kb6    Rb5+ \n6. Kxa6 Rb8 \n7. Ra7# ",
            initialBoard: "k7/p2K1p2/7R/r1p1P3/1p6/8/8/8 w - - 0 1"
        }
    ],
    "236": [
        {
            actions: "1. g7 Rg6 \n2. Ra1  Kb8 \n3. c7+  Kxc7 \n4. Ra8  Rxg7 \n5. Ra7+ ",
            initialBoard: "8/2k5/2P3Pr/8/8/8/6p1/2R3K1 w - - 0 1"
        }
    ],
    "237": [
        {
            actions: "1. Rd8+! Kxd8 \n2. b7    Rb4! \n3. Kxb4  c5+ \n4. Kb5!   Kc7 \n5. Ka6     Kb8 \n6. Kb6     c4 \n7. a4    c3 \n8. a5    c2 \n9. a6    c1=Q \n10. a7#! ",
            initialBoard: "1R6/2pk4/1P6/8/3r4/K7/P7/8 w - - 0 1"
        }
    ],
    "238": [
        {
            actions: "1. d5   Ra8 \n2. d6   Kf7 \n3. d7   Ke7 \n4. a6   Kd8 \n5. Rd6   Rb8 \n6. Kf3    Rb4 \n7. a7   Ra4 \n8. Rxg6 Kxd7 \n9. Rg8    Rxa7 \n10. Rg7+ ",
            initialBoard: "2r5/6k1/6p1/P7/3P4/8/6K1/3R4 w - - 0 1"
        }
    ],
    "239": [
        {
            actions: "1. Rh8    Rd2+ \n2. Kf1    Rd1+ \n3. Ke2    Rg1 \n4. Rxh7+  Kg3 \n5. Rh1! Rg2+ \n6. Ke3    Kg4 \n7. Rh2! Rg3+ \n8. Kf2    Rf3+ \n9. Kg1! Rg3+ \n10. Rg2 ",
            initialBoard: "6R1/3r3p/2p2pP1/8/p1P5/8/5K1k/8 w - - 0 1"
        }
    ],
    "24": [
        {
            actions: "1. Kc5! g5 \n2. b4  g4 \n3. Kd4   g3 \n4. Ke3   Kg5 \n5. b5  Kg4 \n6. b6  Kh3 \n7. b7  g2 \n8. Kf2   Kh2 \n9. b8=Q+ ",
            initialBoard: "8/6p1/7k/8/1K6/8/1P6/8 w - - 0 1"
        },
        {
            actions: "1. Kc5!    Kg6\n2. b4    Kf7\n3. b5    Ke7\n4. Kc6    Kd8\n5. Kb7    g5\n6. b6    g4\n7. Ka7    g3\n8. b7    g2\n9. b8=Q+",
            comment: "\twins for White.",
            initialBoard: "8/6p1/7k/8/1K6/8/1P6/8 w - - 0 1"
        },
        {
            actions: "1. Kc5!    g5\n2. b4    g4\n3. Kd4    g3\n4. Ke3    Kg5\n5. Kf3     Kh4\n6. Kg2",
            comment: "White’s Pawn will Queen and win. ",
            initialBoard: "8/6p1/7k/8/1K6/8/1P6/8 w - - 0 1"
        },
        {
            actions: "1. Kc5!    g5\n2. b4    g4\n3. Kd4    g3\n4. Ke3    Kg5\n5. Kf3     Kf5\n6. Kxg3     Ke4",
            comment: "Black captures  Pawn and draws.",
            initialBoard: "8/6p1/7k/8/1K6/8/1P6/8 w - - 0 1"
        }
    ],
    "240": [
        {
            actions: "1. a7   f1=Q! \n2. Rxf1  Rh2+ \n3. Kc1    Ra2 \n4. b5!    Ra1+ \n5. Kc2    Ra2+ \n6. Kb1    Rxa7 \n7. Rf6+  Kg5 \n8. Ra6    Nd6 \n9. Rxa7  Nxb5 \n10. Ra5 ",
            initialBoard: "5R2/1n6/P6k/8/1P5r/8/3K1p2/8 w - - 0 1"
        }
    ],
    "241": [
        {
            actions: "1. f6!     Rg8 \n2. Rf7     d2 \n3. fxg7+ Rxg7 \n4. Kxh6  d1=Q \n5. Rf8+   Rg8 \n6. g7# ",
            initialBoard: "5r1k/R5p1/6Pp/5P1K/7P/1p1p4/8/8 w - - 0 1"
        }
    ],
    "242": [
        {
            actions: "1. e5 fxe5 \n2. fxe5 Ke7 \n3. e6 Ra4 \n4. g5!  hxg5 \n5. Rd7+ Kf8 \n6. Rf7+ Kg8 \n7. Kg6  g4 \n8. h6!  gxh6 \n9. e7 Ra8 \n10. Rf6 Re8 \n11. Rd6 ",
            initialBoard: "8/r4kp1/5p1p/3R1K1P/4PPP1/8/8/8 w - - 0 1"
        }
    ],
    "243": [
        {
            actions: "1. Qf2    Kd1 \n2. Qd4+ Kc2 \n3. Qe3    Kd1 \n4. Qd3+ Ke1 \n5. Kf6    Kf2 \n6. Qd2    Kf1 \n7. Qf4+ Kg2 \n8. Qe3    Kf1 \n9. Qf3+ Ke1 \n10. Ke5   Kd2 \n11. Qf2   Kd1 \n12. Qd4+  Kc2 \n13. Qe3   Kd1 \n14. Qd3+  Ke1 \n15. Ke4   Kf2 \n16. Qf3+  Ke1 \n17. Kd3   Kd1 \n18. Qxe2+ Kc1 \n19. Qc2# ",
            initialBoard: "8/Q5K1/8/8/8/8/3kp3/8 w - - 0 1"
        }
    ],
    "244": [
        {
            actions: "1. Kf4    f1=Q+ \n2. Kg3 Qf5 \n3. Qg2#",
            initialBoard: "8/8/8/4K3/8/8/3Q1p2/6k1 w - - 0 1"
        }
    ],
    "245": [
        {
            actions: "1. Qb3    Kd2 \n2. Qb2    Kd1 \n3. Kf3!   Kd2 \n4. Kf2    Kd1 \n5. Qd4+ Kc1 \n6. Qb4    Kd1 \n7. Qe1# ",
            initialBoard: "8/8/8/8/6K1/6Q1/2p5/3k4 w - - 0 1"
        }
    ],
    "246": [
        {
            actions: "1. Qf5    Ka1 \n2. Kb3    c1=Q \n3. Qa5+ Kb1 \n4. Qa2# ",
            initialBoard: "5Q2/8/8/8/K7/8/2p5/1k6 w - - 0 1"
        }
    ],
    "247": [
        {
            actions: "1. Qb7+ Ka1 \n2. Qe4    Kb2 \n3. Qd4+ Kb1 \n4. Qd1+ Kb2 \n5. Qd2+ Kb1 \n6. Kd1!  a1=Q \n7. Qc2# ",
            initialBoard: "Q7/8/8/8/8/8/pk2K3/8 w - - 0 1"
        }
    ],
    "248": [
        {
            actions: "1. Qh8+ Kb1 \n2. Qh1+ Kb2 \n3. Qh2+ Kb1 \n4. Kc4!   a1=Q \n5. Kb3 ",
            initialBoard: "Q7/8/8/3K4/8/8/pk6/8 w - - 0 1"
        }
    ],
    "249": [
        {
            actions: "1. Kb6!   Kb2 \n2. Ka5+  Kc1 \n3. Qh1+  Kb2 \n4. Qg2+  Kb1 \n5. Ka4     a1=Q+ \n6. Kb3 ",
            initialBoard: "8/KQ6/8/8/8/8/p7/k7 w - - 0 1"
        }
    ],
    "25": [
        {
            actions: "1. Kd6!    Ka3 \n2. Kc5      Ka4 \n3. f4     b5 \n4. f5     b4 \n5. Kc4!     b3 \n6. Kc3!     Ka3 \n7. f6     b2 \n8. f7     b1=Q \n9. f8=Q+ Ka4 \n10. Qa8+  Kb5 \n11. Qb7+ ",
            initialBoard: "8/1pK5/8/8/8/8/k4P2/8 w - - 0 1"
        },
        {
            actions: "1. Kxb7     Kb3\n2. f4    Kc4\n3. f5    Kd5",
            comment: "both lose Pawns and draw.",
            initialBoard: "8/1pK5/8/8/8/8/k4P2/8 w - - 0 1"
        },
        {
            actions: "1. Kxb7    Kb3 \n2. Kc6    Kc4 \n3. Kd6    Kd4\n4. f4    Ke4",
            comment: "Black also wins  Pawn for draw. ",
            initialBoard: "8/1pK5/8/8/8/8/k4P2/8 w - - 0 1"
        },
        {
            actions: "1. f4    b5 \n2. f5    b4",
            comment: "both sides Queen  and draw. ",
            initialBoard: "8/1pK5/8/8/8/8/k4P2/8 w - - 0 1"
        },
        {
            actions: "1. Kd6!     b5\n2. Kc5     Kb3 \n3. Kxb5     Kc3 \n4. Kc5     Kd3 \n5. Kd5 ",
            comment: "and the Pawn  is safe.",
            initialBoard: "8/1pK5/8/8/8/8/k4P2/8 w - - 0 1"
        },
        {
            actions: "1. Kd6!     Ka3\n2. Kc5     Ka4\n3. f4     b5\n4. f5     b4\n5. f6     b3 \n6. f7     b2\n7. f8=Q     b1=Q \n8. Qa8+     Kb3 \n9. Qb7+ Kc2",
            comment: "is only a draw.",
            initialBoard: "8/1pK5/8/8/8/8/k4P2/8 w - - 0 1"
        },
        {
            actions: "1. Kd6!    Ka3\n2. Kc5    Ka4\n3. f4    b5\n4. f5    b4\n5. Kc4!    b3\n6. Kc3!    Ka3\n7. f6    b2\n8. f7    b1=Q\n9. f8=Q+  Ka2",
            comment: "and mate next  with 10 Qa8#.",
            initialBoard: "8/1pK5/8/8/8/8/k4P2/8 w - - 0 1"
        }
    ],
    "250": [
        {
            actions: "1. Qg8+ Kf2 \n2. Qh7    Kg3 \n3. Qd3+ Kg2 \n4. Qe4+ Kg3 \n5. Kc5    a3 \n6. Kd4    a2 \n7. Qh1    a1=Q+ \n8. Qxa1 Kg2 \n9. Qb2+ Kg1 \n10. Ke3 h1=Q \n11. Qf2# ",
            initialBoard: "7Q/8/1K6/8/p7/8/7p/6k1 w - - 0 1"
        }
    ],
    "251": [
        {
            actions: "1. Qd4+ Ka8\n2. Qh8+ Ka7\n3. Qd8 Ka6\n4. Qa8+ Ra7\n5. Qb8",
            initialBoard: "3Q4/kr6/2K5/8/8/8/8/8 w - - 0 1"
        }
    ],
    "252": [
        {
            actions: "1. Qa8  Kg1 \n2. Qa7+ Kh1 \n3. Qb7  Kg1 \n4. Qb6+ Kh1 \n5. Qc6  Kg1 \n6. Qc5+ Kh1 \n7. Qd5  Kg1 \n8. Qd4+ Kh1 \n9. Qe4  Kg1 \n10. Qe3+  Kh1 \n11. Qf3 Kg1 \n12. Qf1# ",
            initialBoard: "7Q/8/8/8/8/8/6rp/4K2k w - - 0 1"
        }
    ],
    "253": [
        {
            actions: "1. Rh6+ Kg1 \n2. Rh1+ Kxh1 \n3. a8=Q Kh2 \n4. Qh8+ Kg1 \n5. Qg7+ Kf1 \n6. Qa1+ Qc1 \n7. Qxc1# ",
            initialBoard: "8/P7/R7/8/2q5/5K2/7k/8 w - - 0 1"
        }
    ],
    "254": [
        {
            actions: "1. f8=N+! Kg8 \n2. Ne6  Qf7 \n3. Qd8+ Kh7 \n4. Ng5+ ",
            initialBoard: "8/5P1k/5Q2/7q/8/6K1/8/8 w - - 0 1"
        }
    ],
    "255": [
        {
            actions: "1. Kc8  Qg4+ \n2. Kb8  Qb4+ \n3. Ka8 ",
            initialBoard: "8/3KP1q1/8/8/8/4Q3/k7/8 w - - 0 1"
        }
    ],
    "256": [
        {
            actions: "1. Kh7  Qh1+ \n2. Kg7! Qa1+ \n3. Kg8  Qa2 \n4. Qb6+ Kc3 \n5. Kg7! Qg2+ \n6. Qg6  Qb7 \n7. Kg8  Qd5 \n8. Kh7  Qh1+ \n9. Qh6  Qe4+ \n10. Kh8 Qe5+ \n11. Qg7 ",
            initialBoard: "6K1/5P2/6Q1/3q4/1k6/8/8/8 w - - 0 1"
        }
    ],
    "257": [
        {
            actions: "1. Qb4  Qh1 \n2. Qa3+ Kb6 \n3. Qb2+ Kc5 \n4. Ka7  Qh7 \n5. Qb6+ Kd5 \n6. Ka6 ",
            initialBoard: "K7/1P6/k1q5/8/8/1Q6/8/8 w - - 0 1"
        }
    ],
    "258": [
        {
            actions: "1. Qg2+ Kf8 \n2. Qa8+ Qe8 \n3. Qb7  Qd8 \n4. Kg6  Qe8+ \n5. Kf6  Qd8+ \n6. Kxe6 Qe8+ \n7. Qe7+ Qxe7+ \n8. dxe7+  Ke8 \n9. Kf6 ",
            initialBoard: "6k1/5q2/3Pp2K/8/4Q3/8/8/8 w - - 0 1"
        }
    ],
    "259": [
        {
            actions: "1. Qb1  Kd4 \n2. Qb3! Qxe4+ \n3. Kd6  Qa8 \n4. Qe3+ Kc4 \n5. Qc3+ Kb5 \n6. Qb3+ Ka6 \n7. Qa4+ Kb7 \n8. Qb5+ Ka7 \n9. Kc7! ",
            initialBoard: "8/7q/2K2p2/4p3/2k1P2p/8/3P4/7Q w - - 0 1"
        }
    ],
    "26": [
        {
            actions: "1. Kf5!     Ke3 \n2. Ke5      c6 \n3. a4     Kd3 \n4. a5     c5 \n5. a6     c4 \n6. a7     c3 \n7. a8=Q   c2 \n8. Qd5+! Ke2 \n9. Qa2!     Kd1 \n10. Kd4     c1=Q \n11. Kd3 ",
            initialBoard: "8/2p5/6K1/8/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. a4        Ke4\n2. a5        Kd5",
            comment: "and Black catches  the Pawn. ",
            initialBoard: "8/2p5/6K1/8/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf5!     c5\n2. Ke5    Ke3\n3. Kd5    Kd3\n4. Kxc5    ",
            comment: "wins for White.",
            initialBoard: "8/2p5/6K1/8/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "2. Ke5    c6 \n3. Kd6    Kd4\n4. Kxc6    Kc4",
            comment: "\t1 Kf5!    Ke3 \tand Black draws.",
            initialBoard: "8/2p5/6K1/8/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf5!    Ke3\n2. Ke5    Kd3\n3. Kd5    c6+\n4. Kc5    Kc3\n5. a4",
            comment: "and White wins.",
            initialBoard: "8/2p5/6K1/8/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf5!    Ke3\n2. Ke5    c6\n3. a4         Kd3\n4. Kd6     Kc4 ",
            comment: "and Black saves  himself.",
            initialBoard: "8/2p5/6K1/8/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf5!    Ke3\n2. Ke5    c6\n3. a4         Kd3\n4. a5        c5\n5. a6        c4\n6. a7        c3\n7. a8=Q    c2\n8. Qe4+    Kd2\n9. Qd4+    Ke2\n10. Qc3    Kd1\n11. Qd3+    Kc1\n12. Kd4    Kb2\n13. Qe2      Kb1\n14. Kc3    c1=Q+\n15. Kb3",
            comment: "and Black will be  mated. ",
            initialBoard: "8/2p5/6K1/8/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf5!    Ke3\n2. Ke5    c6\n3. a4         Kd3\n4. a5        c5\n5. a6        c4\n6. a7        c3\n7. a8=Q    c2\n8. Qe4+    Kd2\n9. Qd4+    Ke2\n10. Qc3    Kd1\n11. Qd3+    Kc1\n12. Kd4    Kb2\n13. Qe2      Ka1!\n14. Qxc2 ",
            comment: "and Black is stalemated.",
            initialBoard: "8/2p5/6K1/8/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf5!    Ke3\n2. Ke5    c6\n3. a4         Kd3\n4. a5        c5\n5. a6        c4\n6. a7        c3\n7. a8=Q    c2\n8. Qd5+!    Kc3\n9. Qd4+    Kb3\n10. Qa1    Kc4\n11. Ke4",
            comment: "Black Pawn falls.",
            initialBoard: "8/2p5/6K1/8/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf5!    Ke3\n2. Ke5    c6\n3. a4         Kd3\n4. a5        c5\n5. a6        c4\n6. a7        c3\n7. a8=Q    c2\n8. Qd5+!    Ke3\n9. Qg2    c1=Q\n10. Qg5+",
            comment: "winning the Queen.",
            initialBoard: "8/2p5/6K1/8/8/5k2/P7/8 w - - 0 1"
        },
        {
            actions: "2. Ke5    c6\n3. a4         Kd3\n4. a5        c5\n5. a6        c4\n6. a7        c3\n7. a8=Q    c2\n8. Qd5+!    Ke3\n9. Qg2    Kd3\n10. Qg5     Kc3\n11. Qc1",
            comment: "\t1 Kf5!    Ke3 \tis decisive. ",
            initialBoard: "8/2p5/6K1/8/8/5k2/P7/8 w - - 0 1"
        }
    ],
    "260": [
        {
            actions: "1. Qc1+ f4 \n2. Qg1+ Kf5 \n3. Qg4+ Ke5 \n4. Qg5+ Kd4 \n5. Qg1+ Ke5 \n6. Qa1+ d4\n7. Qxa5#",
            initialBoard: "2b4q/4K3/4p3/p2p1pk1/8/1P3P2/2P5/1Q6 w - - 0 1"
        }
    ],
    "261": [
        {
            actions: "1. Qf7+ Qf5 \n2. Qc4+ Qe4 \n3. Qc7+ Kf5 \n4. Qf7+ Kg4 \n5. Qg7+ Kf5 \n6. Nd4+ Kf4 \n7. Qg3# ",
            initialBoard: "8/8/8/8/5k2/3q1N2/Q4K2/8 w - - 0 1"
        }
    ],
    "262": [
        {
            actions: "1. Qg4+ Ke5 \n2. Qg5+ Ke4 \n3. Bg6+ Kd4 \n4. Qe3+ Kd5 \n5. Be4+! ",
            initialBoard: "8/5B2/q7/8/4k3/8/5K2/3Q4 w - - 0 1"
        }
    ],
    "263": [
        {
            actions: "1. Kb7+!  Kh7 \n2. Qh2+ Kg8 \n3. Qa2+ Kh7 \n4. Qf7! Qg8 \n5. Qh5#! ",
            initialBoard: "1QK3kq/6p1/8/6B1/8/8/8/8 w - - 0 1"
        }
    ],
    "264": [
        {
            actions: "1. Qf1  Qb1 \n2. Qf6+ Qb2 \n3. Nb3+ Kb1 \n4. Qf1+ Kc2 \n5. Na1+ Kd2 \n6. Qf2+ Kc3 \n7. Qf6+ ",
            initialBoard: "8/8/8/8/1q6/3Q3K/p7/k1N5 w - - 0 1"
        }
    ],
    "265": [
        {
            actions: "1. Qb6+ Kc4 \n2. Qd4+ Kb3 \n3. Qd1+ Ka3 \n4. Qa1+ Kb3 \n5. Nxa5+  Kb4 \n6. Qd4+ Ka3 \n7. Nc4+ Kb3 \n8. Nd2+ Ka3 \n9. Qa1+ Kb4 \n10. Qb2+  Kc5 \n11. Qb6+  Kd5 \n12. Qd6# ",
            initialBoard: "8/2K5/2N5/pk6/q7/4Q3/8/8 w - - 0 1"
        }
    ],
    "266": [
        {
            actions: "1. Qa1+ Kb4 \n2. Qb2+ Ka4 \n3. Nc3+ Ka5 \n4. Qa3+ Kb6 \n5. Qd6+ Ka5 \n6. Kb8!!  h2 \n7. Qa3+ Kb6 \n8. Qa7+ Kc6 \n9. Qc7# ",
            initialBoard: "K7/8/8/5q2/3Q4/k6p/4N3/8 w - - 0 1"
        }
    ],
    "267": [
        {
            actions: "1. Nh2  Ke3 \n2. Ng4+ Kf4 \n3. Qf1+ Ke4 \n4. Nf6+ Kd4 \n5. Qd1+ Kc4 \n6. Qxd5+  Kc3 \n7. Qa8! Kd4\n8. Nd5 ",
            initialBoard: "8/8/1q1p4/1ppp4/8/5N1K/5k2/3Q4 w - - 0 1"
        }
    ],
    "268": [
        {
            actions: "1. Kh4! Qa4+ \n2. Kg3  Qa2 \n3. Qe1+ Rb1 \n4. Qe5+ Rb2 \n5. Qc3  Kb1 \n6. Qe1+ Kc2 \n7. Rc8+ Kd3 \n8. Rc3+ Kd4 \n9. Qe3+ Kd5 \n10. Rc5+  Kd6 \n11. Qe5+  Kd7 \n12. Rc7+  Kd8 \n13. Qe7# ",
            initialBoard: "1R6/8/8/6K1/8/2Q5/qr6/k7 w - - 0 1"
        }
    ],
    "269": [
        {
            actions: "1. d4   Kc4 \n2. Qa2+   Kb5 \n3. Qb3+   Kc6 \n4. Be7!   Qxe7 \n5. d5+    Kd6 \n6. Qb4+   c5 \n7. dxc6e.p.+  Ke6 \n8. Qxe7+    Kxe7 \n9. c7 ",
            initialBoard: "3q3b/2pp4/8/2B5/8/1k6/3P3Q/3K4 w - - 0 1"
        }
    ],
    "27": [
        {
            actions: "1. h4!       h5 \n2. Kf8!     g6 \n3. Ke7!      g5 \n4. hxg5     h4 \n5. g6      h3 \n6. g7      h2 \n7. g8=Q+ Ka3 \n8. Qg2 ",
            initialBoard: "8/4K1pp/8/8/8/8/k6P/8 w - - 0 1"
        },
        {
            actions: "1. Kf7    g5\n2. Kg7    Kb3\n3. Kxh7    Kc4\n4. Kg6    g4\n5. Kf5    Kd5\n6. Kxg4    Ke6\n7. Kg5    Kf7",
            comment: "\tand an automatic \tdraw.",
            initialBoard: "8/4K1pp/8/8/8/8/k6P/8 w - - 0 1"
        },
        {
            actions: "1. h4!    h6\n2. h5    Kb3\n3. Kf7",
            comment: "White wins at once. ",
            initialBoard: "8/4K1pp/8/8/8/8/k6P/8 w - - 0 1"
        },
        {
            actions: "1. h4!    Kb3\n2. Kf7    Kc4\n3. Kxg7    h5\n4. Kg6    Kd5\n5. Kxh5    Ke6\n6. Kg6    Ke7\n7. Kg7",
            comment: "Black King kept at  arm's length and wins.",
            initialBoard: "8/4K1pp/8/8/8/8/k6P/8 w - - 0 1"
        },
        {
            actions: "1. h4!    h5\n2. Kf7    g5\n3. hxg5    h4\n4. g6    h3",
            comment: "\tboth sides Queen \twith a drawn result.",
            initialBoard: "8/4K1pp/8/8/8/8/k6P/8 w - - 0 1"
        },
        {
            actions: "1. h4!    h5\n2. Kf8!    g5\n3. hxg5",
            comment: "White's Pawn will  Queen with check.",
            initialBoard: "8/4K1pp/8/8/8/8/k6P/8 w - - 0 1"
        },
        {
            actions: "1. h4!    h5\n2. Kf8!    g6\n3. Kf7      g5\n4. hxg5    h4",
            comment: "\tleads to a draw.",
            initialBoard: "8/4K1pp/8/8/8/8/k6P/8 w - - 0 1"
        },
        {
            actions: "1. h4!    h5\n2. Kf8!    g6\n3. Kg7      g5\n4. hxg5    h4",
            comment: "\tleads to a draw.",
            initialBoard: "8/4K1pp/8/8/8/8/k6P/8 w - - 0 1"
        },
        {
            actions: "1. h4!    h5\n2. Kf8!    g6\n3. Ke7!    Kb3\n4. Kf6",
            comment: "White wins with  both Pawns  captured. ",
            initialBoard: "8/4K1pp/8/8/8/8/k6P/8 w - - 0 1"
        }
    ],
    "270": [
        {
            actions: "1. Nc2+ Ka4 \n2. Qg4+ Kb5 \n3. Nd4+ Kb6 \n4. Qg6+ Kb7 \n5. Qe4+!  Kc8 \n6. Qa8+ Kd7 \n7. Qc6+ Ke7 \n8. Qe6#! ",
            initialBoard: "3q2r1/6P1/p7/8/8/k3N1Qp/8/2K5 w - - 0 1"
        }
    ],
    "271": [
        {
            actions: "1. Qa4+ Kc5 \n2. Qa7+ Kd5 \n3. Ne3+ Ke5 \n4. Qg7+ Kf4! \n5. Ng2+!  fxg2 \n6. Qxd4   g1=Q \n7. Qe3+ Ke5 \n8. f4+ ",
            initialBoard: "8/8/2Q4K/5p2/1k1qn1N1/1P3p2/5P2/8 w - - 0 1"
        }
    ],
    "272": [
        {
            actions: "1. Qf5+   Kh8 \n2. Qe5+   Kh7 \n3. Qe4+   Kh8 \n4. Qd4+   Kh7 \n5. Qd3+   Kh8 \n6. Qc3+   Kh7 \n7. Qc2+   Kh8 \n8. Qb2+   Kh7 \n9. Qb1+ Kh8 \n10. Qh1+  Qh7 \n11. Qa1+  Kg8 \n12. Qa8+  Kf7 \n13. Nxg5+ ",
            initialBoard: "6q1/7k/1r2NQ2/1p4p1/5PP1/1K3p2/8/8 w - - 0 1"
        }
    ],
    "273": [
        {
            actions: "1. Ne4 Nd3 \n2. Qf2! Nxf2 \n3. Ng3+ Kg1 \n4. Ng5 Ng4 \n5. Nf3# ",
            initialBoard: "8/K6N/8/2N5/1n6/6Q1/6pn/7k w - - 0 1"
        }
    ],
    "274": [
        {
            actions: "1. Bh6! Ne4 \n2. Kd7! Nf6+ \n3. Ke7  Ng8+ \n4. Kf8! Nxh6 \n5. Nd6  Nf5 \n6. Nf7#",
            initialBoard: "3KNB1k/7p/8/8/8/8/3n4/8 w - - 0 1"
        }
    ],
    "275": [
        {
            actions: "1. Be3+ Kb1 \n2. Bh6  b5 \n3. Ke7  b4 \n4. Kf6  b5 \n5. Kg5  Kc1 \n6. Kf5+ Kb1 \n7. Kf4  Kc1 \n8. Kf3+ Kb1 \n9. Ke3  Kc1 \n10. Ke2+  Kb1 \n11. Bd2 h5 \n12. Kd1 h4 \n13. Bxb4  h3 \n14. Bd5 h2 \n15. Kd2 h1=Q \n16. Bxh1  Ka2 \n17. Bd5+  Kb1 \n18. Ba3 b4 \n19. Bb3 bxa3 \n20. Bg8 a2 \n21. Bh7# ",
            initialBoard: "3K4/1p5p/1p6/8/8/1B6/1p6/b1k3B1 w - - 0 1"
        }
    ],
    "276": [
        {
            actions: "1. e7 Rh8 \n2. Ne6  Re8 \n3. Nc7! Rxe7 \n4. Nc4#! ",
            initialBoard: "8/8/4P3/k1N4r/8/K3N3/8/8 w - - 0 1"
        }
    ],
    "277": [
        {
            actions: "1. b3+  Kb5 \n2. Be8+ Kc5 \n3. b4+  Qxb4 \n4. Be7+ ",
            initialBoard: "8/5B2/p7/q5B1/k7/3K4/1P6/8 w - - 0 1"
        }
    ],
    "278": [
        {
            actions: "1. f7 Ra6+ \n2. Ba3! Rxa3+! \n3. Kb2 Ra2+! \n4. Kc1! Ra1+ \n5. Kd2 Ra2+ \n6. Ke3 Ra3+ \n7. Kf4 Ra4+ \n8. Kg5 Rg4+! \n9. Kh6! Rg8! \n10. Ne7 Be6 \n11. fxg8=Q+ Bxg8 \n12. Ng6#! ",
            initialBoard: "2b4k/8/5Pr1/5N2/8/8/8/K1B5 w - - 0 1"
        }
    ],
    "279": [
        {
            actions: "1. Nb6+ Kc7 \n2. f8=Q!  Qxf8 \n3. d6+  Kc6 \n4. b5+  Kxd6 \n5. Bc5+ Kxc5 \n6. Nd7+ ",
            initialBoard: "N7/1p1kqP2/8/3P4/KP6/4B3/8/8 w - - 0 1"
        }
    ],
    "28": [
        {
            actions: "1. Kf5    Kh6 \n2. Ke5    Kxh5 \n3. Kd5    Kg6 \n4. Kc6    Kf6 \n5. Kxb6 Ke7 \n6. Kc7 ",
            initialBoard: "8/6k1/1p6/6KP/P7/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf5    Kf7\n2. Ke5    Ke7\n3. Kd5    Kd7\n4. h6",
            comment: "\tmakes Black regret it.",
            initialBoard: "8/6k1/1p6/6KP/P7/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf5    Kh6\n2. Ke5    Kxh5\n3. Kd5    Kg6\n4. Kc6    Kf6\n5. Kxb6    Ke7\n6. Kc7",
            comment: "\tWhite wins.",
            initialBoard: "8/6k1/1p6/6KP/P7/8/8/8 w - - 0 1"
        },
        {
            actions: "1. h6+    Kh7\n2. Kh5     Kh8\n3. Kg6     Kg8\n4. h7+     Kh8\n5. Kh6     b5\n6. a5         b4\n7. a6         b3\n8. a7         b2\n9. a8=Q#.",
            comment: "White wins with ",
            initialBoard: "8/6k1/1p6/6KP/P7/8/8/8 w - - 0 1"
        }
    ],
    "280": [
        {
            actions: "1. Rc2+ Kb3 \n2. Rc1  a1=Q! \n3. Rxa1 Kb2 \n4. Rf1! a2 \n5. Kc4! a1=Q \n6. Nd3+ Ka2 \n7. Nb4+ Kb2 \n8. Rf2+ Kb1 \n9. Kb3 ",
            initialBoard: "8/8/8/8/5N2/p1RK4/pk6/8 w - - 0 1"
        }
    ],
    "281": [
        {
            actions: "1. Rg8+ Kb7 \n2. Nc5+ Kb6 \n3. Na4+ Kb5 \n4. Nc3+ Kb4 \n5. Na2+ Kb3 \n6. Nc1+ Kb2 \n7. Kxh2 Kxc1 \n8. Rg1 ",
            initialBoard: "2k5/6R1/N7/8/8/6K1/7p/5b2 w - - 0 1"
        }
    ],
    "282": [
        {
            actions: "1. Ne8+ Kc8 \n2. Nd6+ Kd8 \n3. Rb8+ Kd7 \n4. Rb7+ Kd8 \n5. Nf7+ Kc8 \n6. Kc6  Rg7 \n7. Nd6+ Kd8 \n8. Rb8+ Ke7 \n9. Nf5+ Kf6 \n10. Nxg7 ",
            initialBoard: "8/2k3Nr/8/3K4/1R6/8/8/8 w - - 0 1"
        }
    ],
    "283": [
        {
            actions: "1. Rh8+ Kd7 \n2. Rh7+ Kd6! \n3. Nf7+ Kc7 \n4. Ne5+!  Kb6! \n5. Nc4+ Ka6 \n6. Rh6+ Kb7! \n7. Nd6+ Kb8 \n8. Rh8+ Kc7 \n9. Nb5+ ",
            initialBoard: "3Nk3/r7/7R/8/3K4/8/8/8 w - - 0 1"
        }
    ],
    "284": [
        {
            actions: "1. Ra1+ Ke2 \n2. Ng3+ hxg3 \n3. Ra2+!  Kd1 \n4. Kd3  Ke1 \n5. Ke3  Kf1 \n6. Kf3  Kg1 \n7. Kxg3 Kf1 \n8. Ra1+ ",
            initialBoard: "R7/8/8/8/4K2p/8/8/3k1N1r w - - 0 1"
        }
    ],
    "285": [
        {
            actions: "1. Rb1+ Kd2 \n2. Rb2  Kc1 \n3. Rxc2+  Kb1 \n4. Rc4! Bf2+ \n5. Kg4  Kxa1 \n6. Kf3!  Bh4 \n7. Rxh4 ",
            initialBoard: "8/b7/8/8/7K/1R6/2n5/N2k4 w - - 0 1"
        }
    ],
    "286": [
        {
            actions: "1. Re3+ Kd4 \n2. Rg3  Ne4 \n3. Ra3  Nd5 \n4. Nf3#! ",
            initialBoard: "8/8/8/1K2k1n1/1n6/5R2/8/4N3 w - - 0 1"
        }
    ],
    "287": [
        {
            actions: "1. Bb3+ Ke5 \n2. Kc2  Bd4 \n3. Rg6  Nf5 \n4. Re6#! ",
            initialBoard: "8/8/7n/3k4/B4p2/8/8/b2K2R1 w - - 0 1"
        }
    ],
    "288": [
        {
            actions: "1. Kb4  Nd4 \n2. Kc3  Be2 \n3. Bxe2 Nxe2+ \n4. Kd3  Ng3 \n5. Rf3  Nh5 \n6. Rf5  Ng7 \n7. Rf8#! ",
            initialBoard: "7k/7p/B7/1K6/8/1n3b2/8/5R2 w - - 0 1"
        }
    ],
    "289": [
        {
            actions: "1. a3!  Rxf1+ \n2. Ke2  Rf4 \n3. Rb3+ Kc2 \n4. Rb4! Rxb4 \n5. axb4 ",
            initialBoard: "8/8/8/5p2/8/3R4/P7/1k1K1B1r w - - 0 1"
        }
    ],
    "29": [
        {
            actions: "1. Kd5    Kf5 \n2. Kc5    Kxf4 \n3. Kb5    Ke5 \n4. Kxa5 Kd6 \n5. Kb6    Kd7 \n6. Kb7    Kd8 \n7. a5 ",
            initialBoard: "8/8/5k2/p7/P3KP2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. f5        Kf7\n2. Ke5    Ke7\n3. f6+    Kf7\n4. Kf5    Kf8\n5. Ke6    Ke8\n6. f7+    Kf8\n7. Kd6    Kxf7\n8. Kc6    Ke7\n9. Kb6    Kd7\n10. Kxa5    Kc7\n11. Kb5    Kb8",
            comment: "Black draws against  the Rook Pawn.",
            initialBoard: "8/8/5k2/p7/P3KP2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd5    Kf5\n2. Kc5    Kxf4\n3. Kb5    Ke5\n4. Kxa5    Kd6\n5.Kb6     Kd7 \n6. Kb7    Kd8\n7. a5",
            comment: "White wins",
            initialBoard: "8/8/5k2/p7/P3KP2/8/8/8 w - - 0 1"
        }
    ],
    "290": [
        {
            actions: "1. h5+  Kh6 \n2. Nf7+ Kxh5 \n3. Re5+ Kh4 \n4. Ng5! f1=Q+ \n5. Nf3+ Kh3 \n6. Rh5+ Kg2 \n7. Rh2# ",
            initialBoard: "3N4/4R3/6k1/8/5K1P/8/5p2/8 w - - 0 1"
        }
    ],
    "291": [
        {
            actions: "1. Rh8+ Kg5 \n2. Nd6  Qc6 \n3. Nf7+ Kf4 \n4. Rh4#! ",
            initialBoard: "q3N1R1/p7/8/8/4P2k/8/4K2P/8 w - - 0 1"
        }
    ],
    "292": [
        {
            actions: "1. Ra4+ Ke5 \n2. Ra5  c5 \n3. Rxc5 Qxc5 \n4. d4+  Kxd4 \n5. Ne6+ ",
            initialBoard: "3N4/2p5/8/3q4/3k4/8/3PKP2/R7 w - - 0 1"
        }
    ],
    "293": [
        {
            actions: "1. Rc8  Qa3 \n2. Nd4+   Kb6 \n3. Rb8+   Kc5 \n4. Rb5+   Kd6 \n5. Rd5+   Ke7 \n6. Ra5! Qxa5 \n7. Nc6+ ",
            initialBoard: "5q2/2R5/5p2/1k3N2/2p1P3/2P5/2K5/8 w - - 0 1"
        }
    ],
    "294": [
        {
            actions: "1. b7!   Kf7 \n2. Ra8   Qxb7 \n3. Rf8+!   Kxf8+ \n4. d7+   Kf7 \n5. d8=N+! Ke8+ \n6. Nxb7 ",
            initialBoard: "1q3k2/7K/1P1P1p2/R2P4/8/B5b1/8/8 w - - 0 1"
        }
    ],
    "295": [
        {
            actions: "1. Rh5+ Ke6! \n2. Bb3+ d5 \n3. Rxd5 Qxf2 \n4. d4!  f5 \n5. e4 Qxb2 \n6. Rd6+!  Kxd6 \n7. e5+  Kc6 \n8. d5#! ",
            initialBoard: "2K5/4p3/1p1p1p2/1p2k3/1P3q2/8/1PBPPP2/7R w - - 0 1"
        }
    ],
    "296": [
        {
            actions: "1. Ra5  Kc6 \n2. Kc8  Kd6 \n3. Kd8  Ke6 \n4. Ra6+   Kf7 \n5. Rf5+   Kg7 \n6. Rg5+   Kf7 \n7. Rg6  b1=Q \n8. Rf6# ",
            initialBoard: "RK6/8/1k6/7R/8/8/pp6/8 w - - 0 1"
        }
    ],
    "297": [
        {
            actions: "1. Ra4+   Kg5 \n2. Rc5+   Kf6 \n3. Ra6+   Ke7 \n4. Rc7+   Kd8 \n5. Rh7  Qg2 \n6. Ra8+ Qxa8 \n7. Rh8+ ",
            initialBoard: "8/8/8/8/7k/6pq/R1R5/4K3 w - - 0 1"
        }
    ],
    "298": [
        {
            actions: "1. Re1+   Kf5 \n2. Rxe7   Kf6 \n3. Rf7+!  Kxf7 \n4. b7   Rf6+ \n5. Kh7  Rb6 \n6. Ra7  Ke6 \n7. Ra6!   Rxa6 \n8. b8=Q ",
            initialBoard: "8/4r3/1P5K/8/1p2kr2/8/R7/R7 w - - 0 1"
        }
    ],
    "299": [
        {
            actions: "1. Rf5+ Ke8 \n2. Re7+ Kd8 \n3. Rd7+ Kc8 \n4. Rc5+ Kb8 \n5. Rb5+ Ka8 \n6. Kc7  Rg5 \n7. Rd8+ Ka7 \n8. Rb7+ Ka6 \n9. Rd6+ Ka5 \n10. Ra7+  Kb5 \n11. Rb6+  Kc5 \n12. Ra5# ",
            initialBoard: "5kr1/7R/3K4/7R/2p5/2P1p1r1/8/8 w - - 0 1"
        }
    ],
    "3": [
        {
            actions: "1. Ke6! Kd8 \n2. Kf7  Kd7 \n3. e6+  Kd8 \n4. e7+  Kd7 \n5. e8=Q+ ",
            initialBoard: "4k3/8/3K4/4P3/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. e6    Kd8 \n2. e7+    Ke8 \n3. Ke6",
            comment: "to protect the Pawn but stalemates Black.",
            initialBoard: "4k3/8/3K4/4P3/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Ke6! Kf8 \n2. Kd7     Kf7 \n3. e6+     Kf8  \n4. e7+",
            comment: "White wins.",
            initialBoard: "4k3/8/3K4/4P3/8/8/8/8 w - - 0 1"
        }
    ],
    "30": [
        {
            actions: "1. Kd5!  Kd8 \n2. Ke6    Kc8 \n3. Ke7    Kb8 \n4. Kd8    Ka7 \n5. Kxc7 Ka8 \n6. Kd8",
            initialBoard: "8/2p1k3/2P5/1P2K3/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf5    Kd6\n2. Kf6    Kc5\n3. Ke6    Kxb5\n4. Kd5    Kb6",
            comment: "White loses  both Pawns. ",
            initialBoard: "8/2p1k3/2P5/1P2K3/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd5!    Kf7\n2. b6     ",
            comment: "White wins  instantly.",
            initialBoard: "8/2p1k3/2P5/1P2K3/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd5!    Kd8\n2. Ke6    Ke8 \n3. b6        Kd8\n4. b7",
            comment: "White mates  next move.  ",
            initialBoard: "8/2p1k3/2P5/1P2K3/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd5!     Kd8\n2. Ke6    Ke8\n3. b6        cxb6\n4. c7 ",
            comment: "White mates  next move. ",
            initialBoard: "8/2p1k3/2P5/1P2K3/8/8/8/8 w - - 0 1"
        }
    ],
    "300": [
        {
            actions: "1. Be5+!  Kxe5 \n2. g7 Rb8 \n3. Bb3! Rxb3+ \n4. Nf3+ Rxf3+ \n5. Kg2",
            initialBoard: "1B6/8/5kP1/8/8/7K/8/1r1B2N1 w - - 0 1"
        }
    ],
    "31": [
        {
            actions: "1. Kc5  Kb8 \n2. Kb6  Ka8 \n3. Kc7  Ka7 \n4. a6 bxa6 \n5. b6+  Ka8 \n6. b7+  Ka7 \n7. b8=Q# ",
            initialBoard: "8/kp6/8/PP6/1K6/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc5    b6+\n2. axb6+    Kb7",
            comment: "Black draws",
            initialBoard: "8/kp6/8/PP6/1K6/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc5    b6+\n2. Kc6     bxa5\n3. Kc7    a4\n4. b6+    Ka6\n5. b7    a3\n6. b8=Q",
            comment: "White wins Pawn and game.",
            initialBoard: "8/kp6/8/PP6/1K6/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc5    Ka8\n2. Kb6    Kb8 \n3. a6        Ka8\n4. axb7+    Kb8\n5. Ka6    Kc7\n6. Ka7",
            comment: "White Pawn  Queens and wins.",
            initialBoard: "8/kp6/8/PP6/1K6/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc5    Ka8\n2. Kb6    Kb8\n3. a6        bxa6\n4. Kxa6!    Ka8\n5. b6",
            comment: "and White wins.",
            initialBoard: "8/kp6/8/PP6/1K6/8/8/8 w - - 0 1"
        }
    ],
    "32": [
        {
            actions: "1. f6+    Kf8! \n2. f7!    Kxf7 \n3. Kf5    Ke7 \n4. Kg6    Kd8 \n5. Kf6    Kd7 \n6. Kf7    Kd8 \n7. Ke6    Kc7 \n8. Ke7    Kc8 \n9. Kxd6 Kd8 \n10. Kc6   Kc8 \n11. d6    Kd8 \n12. d7    Ke7 \n13. Kc7",
            initialBoard: "8/6k1/3p4/3P1PK1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. f6+    Kf7\n2. Kf5    Kf8\n3. Ke6\n1. f6+    Kf8!\n2.   f7!        Ke7\n3. f8=Q+     Kxf8\n4. Kf6    Ke8\n5. Ke6    Kd8\n6. Kxd6    Ke8\n7. Kc7",
            comment: "It’s all over with  lost Pawn. \t \t32VAR-2 \tWhite wins.",
            initialBoard: "8/6k1/3p4/3P1PK1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "2. f7!        Kxf7\n3. Kf5        Ke7\n4. Kg6    Kd8\n5. Kf6    Kd7\n6. Kf7        Kd8\n7. Ke6    Kc7\n8. Ke7    Kc8\n9. Kx d6     Kd8\n10. Kc6        Ke7\n11. Kc7",
            comment: "\t\t\t1 f6+    Kf8! and the Pawn has  a clear road.",
            initialBoard: "8/6k1/3p4/3P1PK1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. f6+    Kf8!\n2. f7!        Kxf7\n3. Kf5        Ke7\n4. Kg6    Kd8\n5. Kf6    Kd7\n6. Kf7        Kd8\n7. Ke6    Kc7\n8. Ke7    Kc8\n9. Kxd6     Kd8\n10. Kc6    Kc8\n11. d6        Kd8\n12. d7        Ke7\n13. Kc7",
            comment: "and wins",
            initialBoard: "8/6k1/3p4/3P1PK1/8/8/8/8 w - - 0 1"
        }
    ],
    "33": [
        {
            actions: "1. Kf6    Kd8! \n2. d7!    Kxd7 \n3. Kf7!   Kd8 \n4. Ke6    Kc7 \n5. Ke7    Kc8 \n6. Kd6    Kb7 \n7. Kd7    Kb8 \n8. Kxc6 Kc8 \n9. Kd6    Kd8 \n10. c6    Kc8 \n11. c7    Kb7 \n12. Kd7 ",
            initialBoard: "8/3k4/2pP4/2P1K3/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf6      Ke8\n2. Ke6            Kd8\n3. d7            Kc7\n4. Ke7            ",
            comment: "White wins",
            initialBoard: "8/3k4/2pP4/2P1K3/8/8/8/8 w - - 0 1"
        }
    ],
    "34": [
        {
            actions: "1. Kd7    Kb6 \n2. Kc8    Ka6 \n3. Kc7    Kb5 \n4. Kb7    Kxb4 \n5. Kxc6 Kc4 \n6. d5",
            initialBoard: "8/1k6/2pK4/8/1P1P4/8/8/8 w - - 0 1"
        },
        {
            actions: "1. d5        cxd5\n2. Kxd5    Kb6\n3. Kc4    Kc6\n4. b5+    Kb6",
            comment: "\tthe position is a  familiar King on  King draw.",
            initialBoard: "8/1k6/2pK4/8/1P1P4/8/8/8 w - - 0 1"
        }
    ],
    "35": [
        {
            actions: "1. Kd6      Kd8 \n2. Ke6      Kc8 \n3. Ke7      Kb8 \n4. Kd7      Ka8 \n5. c6     bxc6 \n6. Kc7      c5 \n7. b7+      Ka7 \n8. b8=Q+ Ka6 \n9. Qb6#",
            initialBoard: "2k5/1p6/1P6/2PK4/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd6    Kd8\n2. Ke6    Ke8\n3. c6        bxc6\n4. b7",
            comment: "White Queen’s first and wins.    ",
            initialBoard: "2k5/1p6/1P6/2PK4/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd6    Kd8\n2. Ke6    Ke8\n3. c6        Kd8\n4. cxb7    Ke8\n5. b8=Q#",
            comment: "Clean position.",
            initialBoard: "2k5/1p6/1P6/2PK4/8/8/8/8 w - - 0 1"
        }
    ],
    "36": [
        {
            actions: "1. Kd7!  Kb7 \n2. a5!    bxa5 \n3. c5   a4 \n4. c6+    Kb6 \n5. c7   a3 \n6. c8=Q a2 \n7. Qa8",
            initialBoard: "8/8/kpK5/8/P1P5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd7!    Ka7\n2. Kc7    Ka6\n3. Kb8    Ka5\n4. Kb7    Kxa4\n5. Kxb6     Kb4\n6. c5",
            comment: "seizing the opposition White gets behind the Pawn and wins.  ",
            initialBoard: "8/8/kpK5/8/P1P5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd7!    Kb7\n2. a5!        Ka6\n3. axb6    Kxb6\n4. Kd6    Kb7\n5. c5        Kc8\n6. Kc6 ",
            comment: "White takes familiar  winning position.",
            initialBoard: "8/8/kpK5/8/P1P5/8/8/8 w - - 0 1"
        }
    ],
    "37": [
        {
            actions: "1. Kb7      Kd7 \n2. Kb8      Kd8 \n3. d6!      cxd6 \n4. b6     d5 \n5. Ka7      d4 \n6. b7     d3 \n7. b8=Q+ Kd7 \n8. Qb5+",
            initialBoard: "3k4/2p5/2K5/1P1P4/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. d6        Kc8\n2. b6        cxb6\n3. Kxb6    Kd7",
            comment: "drawing easily. ",
            initialBoard: "3k4/2p5/2K5/1P1P4/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. d6        Kc8\n2. d7+    Kd8\n3. Kb7    Kxd7\n4. Kb8    Kd6",
            comment: "\tand Black draws.",
            initialBoard: "3k4/2p5/2K5/1P1P4/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kb7    Kd7\n2. Kb8    Kd6\n3. Kc8    Kxd5\n4. Kxc7",
            comment: "and White wins.",
            initialBoard: "3k4/2p5/2K5/1P1P4/8/8/8/8 w - - 0 1"
        }
    ],
    "38": [
        {
            actions: "1. f7+  Kf8 \n2. Kf6  h4 \n3. g4 h3 \n4. g5 h2 \n5. g6 h1=Q \n6. g7# ",
            initialBoard: "4k3/8/4KP2/7p/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf5    Kf8\n2. Kg6          ",
            comment: "White teases his only Pawn up the  g file to Queen.",
            initialBoard: "4k3/8/4KP2/7p/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf5    Kf7\n2. Kg5    Kf8\n3. Kxh5    ",
            comment: "etc.",
            initialBoard: "4k3/8/4KP2/7p/8/6P1/8/8 w - - 0 1"
        }
    ],
    "39": [
        {
            actions: "1. g3!    Kh8 \n2. g4     Kg8 \n3. g5     Kh8 \n4. g6  hxg6 \n5. hxg6 Kg8 \n6. g7  Kf7 \n7. Kh7 ",
            initialBoard: "6k1/7p/7K/7P/8/8/6P1/8 w - - 0 1"
        },
        {
            actions: "1. g4        Kh8\n2. g5    Kg8\n3. g6    hxg6\n4. Kxg6    Kh8",
            comment: "Black draws against  the Rook Pawn",
            initialBoard: "6k1/7p/7K/7P/8/8/6P1/8 w - - 0 1"
        },
        {
            actions: "1. g4     Kh8\n2. g5    Kg8\n3. g6    hxg6\n4. hxg6    Kh8\n5. g7+",
            comment: "\twith 5 . . .Kg8 \ta draw occurs.",
            initialBoard: "6k1/7p/7K/7P/8/8/6P1/8 w - - 0 1"
        },
        {
            actions: "1. g3        Kh8\n2. g4             Kg8\n3. g5        Kh8\n4. g6        Kg8\n5. g7    Kf7\n6. Kxh7",
            comment: "\tWhite wins.",
            initialBoard: "6k1/7p/7K/7P/8/8/6P1/8 w - - 0 1"
        }
    ],
    "4": [
        {
            actions: "1. Kf5  Kf8 \n2. Kf6! Ke8 \n3. Ke6  Kd8 \n4. d7 Kc7 \n5. Ke7 ",
            initialBoard: "8/5k2/3P4/8/6K1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf5    Kf8\n2. Ke6    Ke8\n3. d7+    Kd8\n4. Kd6",
            comment: "and Black draws by stalemate.",
            initialBoard: "8/5k2/3P4/8/6K1/8/8/8 w - - 0 1"
        }
    ],
    "40": [
        {
            actions: "1. Kf2  Kg6 \n2. Ke2  Kf5 \n3. Ke3  Ke5 \n4. g6!  Kf6 \n5. h5 Kg7 \n6. Kxe4 ",
            initialBoard: "8/8/8/5kP1/4p2P/4K3/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf2    Ke5\n2. g6    Kf6\n3. h5    Ke6\n4. g7        Kf7\n5. h6",
            comment: "Black's King cannot be all over the board  at the same time.",
            initialBoard: "8/8/8/5kP1/4p2P/4K3/8/8 w - - 0 1"
        }
    ],
    "41": [
        {
            actions: "1. Kd5    Kc8 \n2. Kd4!  Kd8 \n3. Kc4    Kc8 \n4. Kd5    Kc7 \n5. Kc5    Kc8 \n6. Kb6    Kb8 \n7. Kxa6 Kc7 \n8. Kb5    Kc8 \n9. Kb6    Kb8 \n10. c7+   Kc8 \n11. a6    Kd7 \n12. Kb7 ",
            initialBoard: "8/2k5/p1P5/P1K5/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd5    Kc8\n2. Kd4!    Kc7\n3. Kc5    Kb8\n4. Kb6 ",
            comment: "Black's Pawn is lost.",
            initialBoard: "8/2k5/p1P5/P1K5/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd5    Kc8\n2. Kd4!    Kd8\n3. Kc4    Kc8\n4. Kd5    Kd8\n5. Kd6    Kc8\n6. c7        Kb7\n7. Kd7    Ka7\n8. c8=Q",
            comment: "stalemate",
            initialBoard: "8/2k5/p1P5/P1K5/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc4    Kc8\n2. Kd5    Kd8\n3. Kd6    Kc8\n4. c7        Kb7\n5. Kd7    Ka7\n6. Kc6     Ka8\n7. c8=Q+     Ka7",
            comment: "and mate next  with 8 Qb7#.",
            initialBoard: "8/2k5/p1P5/P1K5/8/8/8/8 w - - 0 1"
        }
    ],
    "42": [
        {
            actions: "1. c5   Kc8 \n2. Kb6    Kb8 \n3. c6   Ka8 \n4. Kc7    bxc6 \n5. Kxc6 Ka7 \n6. b5   Kb8 \n7. Kb6    Ka8 \n8. Kc7    Ka7 \n9. b6+ ",
            initialBoard: "8/1pk5/8/1K6/1PP5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. c5        b6\n2. c6    Kc8\n3. Kxb6 ",
            comment: "and it's all over.",
            initialBoard: "8/1pk5/8/1K6/1PP5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. c5         Kc8\n2. Kb6    Kb8\n3. c6         Ka8\n4. c7 ",
            comment: "resulting in a stalemate.",
            initialBoard: "8/1pk5/8/1K6/1PP5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. c5        Kc8\n2. Kb6    Kb8\n3. c6        Kc8\n4. c7        Kd7\n5. Kxb7",
            comment: "White wins",
            initialBoard: "8/1pk5/8/1K6/1PP5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. c5        Kc8\n2. Kb6    Kb8\n3. c6        bxc6\n4. Kxc6    Kc8\n5. Kb6    Kb8\n6. b5        Kc8\n7. Ka7",
            comment: "White wins.",
            initialBoard: "8/1pk5/8/1K6/1PP5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. c5        Kc8\n2. Kb6    Kb8\n3. c6        Ka8\n4. cxb7+    Kb8\n5. Ka6",
            comment: "White wins",
            initialBoard: "8/1pk5/8/1K6/1PP5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. c5        Kc8\n2. Kb6    Kb8\n3. c6        Ka8\n4. Kc7    bxc6\n5. Kxc6    Ka7\n6. b5        Kb8\n7. b6        Kc8",
            comment: "Black escapes  with a draw.",
            initialBoard: "8/1pk5/8/1K6/1PP5/8/8/8 w - - 0 1"
        }
    ],
    "43": [
        {
            actions: "1. g3   Kd4 \n2. f3   gxf3+ \n3. Kxf3  Ke5 \n4. Kg4!  Kf6 \n5. Kh5    Kf5 \n6. g4+    Kf6 \n7. Kh6    Kf7 \n8. g5   Kg8 \n9. Kg6",
            initialBoard: "8/8/8/8/4k1p1/8/4KPP1/8 w - - 0 1"
        },
        {
            actions: "1. f3+    gxf3\n2. gxf3+    Kf4",
            comment: "Black has a draw.",
            initialBoard: "8/8/8/8/4k1p1/8/4KPP1/8 w - - 0 1"
        },
        {
            actions: "1. g3        Ke5\n2. Ke3    Kf5\n3. Kd4    Kf6\n4. Ke4    Kg5\n5. Ke5    Kg6\n6. Kf4    Kh5\n7. Kf5    Kh6\n8. Kxg4",
            comment: "\tWhite wins.",
            initialBoard: "8/8/8/8/4k1p1/8/4KPP1/8 w - - 0 1"
        },
        {
            actions: "1. g3         Kd4\n2. f3        Ke5\n3. fxg4    Ke4\n4. Kf2    Ke5\n5. Ke3    Ke6\n6. Kf4    Kf6\n7. g5+    Kg6\n8. Kg4    Kg7\n9. Kf5    Kf7\n10. g6+    Kg7\n11. Kg5    Kg8\n12. Kf6    Kf8\n13. g7+    Kg8\n14. g4    Kh7\n15. Kf7",
            comment: "\tWhite wins",
            initialBoard: "8/8/8/8/4k1p1/8/4KPP1/8 w - - 0 1"
        },
        {
            actions: "1. g3        Kd4\n2. f3        gxf3+\n3. Kxf3    Ke5\n4. Kg4!    Kf6\n5. Kh5    Kg7\n6. Kg5    Kf7\n7. Kh6     \n1. Kb4    c5+\n2. dxc5+    Kc6\n3. Kb3    Kxc5 ",
            comment: "etc. all the way to a Queen. \t \t44VAR-1 and the position  is a draw. ",
            initialBoard: "8/8/8/8/4k1p1/8/4KPP1/8 w - - 0 1"
        }
    ],
    "44": [
        {
            actions: "1. Kb3    Kc7 \n2. Kc3    Kd6 \n3. Kd3    Kd7 \n4. Ke4    Ke6 \n5. c5   Kf6 \n6. d5!    Ke7 \n7. d6+    Kd7 \n8. Ke5    Kd8 \n9. d7!    Kxd7 \n10. Kf6   Kd8 \n11. Ke6   Kc7 \n12. Ke7   Kc8 \n13. Kd6   Kb7 \n14. Kd7   Kb8 \n15. Kxc6 Kc8 \n16. Kd6   Kd8 \n17. c6    Kc8 \n18. c7    Kb7 \n19. Kd7 ",
            initialBoard: "8/8/1kp5/8/K1PP4/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kb3    Kc7\n2. Kc3    Kd6\n3. Kd3    Kd7\n4. Ke4     Ke6\n5. c5        Kf7\n6. Kf5    Ke7\n7. Ke5    Kd7\n8. Kf6    Kd8\n9. Ke6    Kc7\n10. Ke7    Kc8\n11. Kd6    Kb7\n12. Kd7",
            comment: "\tBlack's Pawn falls.",
            initialBoard: "8/8/1kp5/8/K1PP4/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kb3    Kc7\n2. Kc3    Kd6\n3. Kd3    Kd7\n4. Ke4     Ke6\n5. c5        Kf6\n6. d5!    cxd5\n7. Kxd5    Ke7\n8. Kc6    Kd8\n9. Kb7 ",
            comment: "assures White Pawn's future.",
            initialBoard: "8/8/1kp5/8/K1PP4/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kb3    Kc7\n2. Kc3    Kd6\n3. Kd3    Kd7\n4. Ke4     Ke6\n5. c5        Kf6\n6. d5!    Ke7\n7. 5xc6    Kd8\n8. Ke5    Kc7\n9. Kd5    Kc8\n10. Kd6    Kd8\n11. c7+    Kc8 ",
            comment: "and Black has  a draw.",
            initialBoard: "8/8/1kp5/8/K1PP4/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kb3    Kc7\n2. Kc3    Kd6\n3. Kd3    Kd7\n4. Ke4     Ke6\n5. c5        Kf6\n6. d5!        Ke7\n7. d6+    Kd7\n8. Ke5    Kd8\n9. d7!    Ke7\n10. d8=Q+    exd8\n11. Kd6    Kc8\n12. Kxc6",
            comment: "leaving a standard  winning position.",
            initialBoard: "8/8/1kp5/8/K1PP4/8/8/8 w - - 0 1"
        }
    ],
    "45": [
        {
            actions: "1. Kf1    Kd4 \n2. Kf2    Kc5 \n3. e4!    Kd4 \n4. Kf3    Ke5 \n5. Ke3    Ke6 \n6. Kd4    Kd6 \n7. e5+    Ke6 \n8. Ke4    Ke7 \n9. Kd5    Kd7 \n10. e6+   Ke7 \n11. Ke5   Ke8 \n12. Kd6   Kd8 \n13. Kc6   Ke7 \n14. Kb7   Kxe6 \n15. Kxa7 Kd7 \n16. Kb7 ",
            initialBoard: "8/p7/P7/8/8/4k3/4P3/4K3 w - - 0 1"
        },
        {
            actions: "1. Kf1    Kd4\n2. Kf2    Kc5\n3. e4!    Kb6\n4. e5        Kxa6\n5. e6 ",
            comment: "White's Pawn cannot  be caught and wins.",
            initialBoard: "8/p7/P7/8/8/4k3/4P3/4K3 w - - 0 1"
        },
        {
            actions: "1. Kf1    Kd4\n2. Kf2    Kc5\n3. e4!    Kd4\n4. Kf3    Ke5\n5. Ke3    Ke6\n6. Kd4    Kd6\n7. e5+    Ke6\n8. Ke4    Ke7\n9. Kd5    Kd7\n10. e6+    Ke7\n11. Kc6     Kxe6\n12. Kb7    Kd7\n13. Kxa7     Kc7\n14. Ka8    Kc8",
            comment: "White cannot  extricate his King,  hence a crafty draw.",
            initialBoard: "8/p7/P7/8/8/4k3/4P3/4K3 w - - 0 1"
        },
        {
            actions: "1. Kf1    Kd4\n2. Kf2    Kc5\n3. e4!    Kd4\n4. Kf3    Ke5\n5. Ke3    Ke6\n6. Kd4    Kd6\n7. e5+    Ke6\n8. Ke4    Ke7\n9. Kd5    Kd7\n10. e6+    Ke7\n11. Kc6    Ke8\n12. Kd6    Kd8\n13. Kc6    Kc8\n14. e7     Kb8",
            comment: "mates next move  with 15 e8=Q#.",
            initialBoard: "8/p7/P7/8/8/4k3/4P3/4K3 w - - 0 1"
        }
    ],
    "46": [
        {
            actions: "1. Kc6    Ke7 \n2. Kd5    Kd7 \n3. Kd4!  Ke7 \n4. Ke3    Kd7 \n5. Kf4    Ke6 \n6. Ke4    Kd7 \n7. Kf5    Ke7 \n8. g4   Ke8! \n9. Kf6!   Kf8 \n10. g5    Ke8 \n11. Kg7! Ke7 \n12. Kg8   Ke8 \n13. e6!   fxe6 \n14. g6    e5 \n15. g7    e4 \n16. Kh7   e3 \n17. g8=Q+ ",
            initialBoard: "3k4/1K3p2/8/4P3/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc6    Ke7\n2. Kd5    f6\n3. e6    f5\n4. Ke5",
            comment: "wins the Pawn.",
            initialBoard: "3k4/1K3p2/8/4P3/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc6    Ke7\n2. Kd5    f6\n3. e6        Ke8\n4. Kd6    Kd8\n5. e7+    Ke8\n6. g4        Kf7\n7. Kd7",
            comment: "\tWhite wins.",
            initialBoard: "3k4/1K3p2/8/4P3/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1.Kc6    Ke7\n2. Kd5    Kd7\n3. Ke4    Ke6\n4. Kf4    f6\n5. exf6    Kxf6\n6. Kg4    Kg6",
            comment: "Black has the  opposition and  draws.",
            initialBoard: "3k4/1K3p2/8/4P3/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc6    Ke7\n2. Kd5    Kd7\n3. Kd4!    Ke7\n4. Ke3    Kd7\n5. Kf4    Ke6\n6. Ke4    f6\n7. exf6     Kxf6\n8. Kf4    Kg6\n9. Kg4     Kf6\n10. Kh5",
            comment: "\tWhite has the opposition  and wins.",
            initialBoard: "3k4/1K3p2/8/4P3/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc6    Ke7\n2. Kd5     Kd7\n3. Kd4!    Ke7\n4. Ke3     Kd7\n5. Kf4    Ke6\n6. Ke4     Kd7\n7. Kf5     Ke7\n8. g4     Ke8!\n9. e6     Ke7\n10. exf7     Kxf7\n11. Kg5     Kg7",
            comment: "again Black takes the opposition and draws.",
            initialBoard: "3k4/1K3p2/8/4P3/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc6    Ke7\n2. Kd5    Kd7\n3. Kd4!    Ke7\n4. Ke3    Kd7\n5. Kf4    Ke6\n6. Ke4    Kd7\n7. Kf5    Ke7\n8. g4        Ke8!\n9. Kf6!    Kf8\n10. e6     fxe6\n11. Kxe6    Kg7\n12. Kf5    Kf7 ",
            comment: "lets Black draw \teasily.",
            initialBoard: "3k4/1K3p2/8/4P3/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1.Kc6    Ke7\n2. Kd5    Kd7\n3. Kd4!    Ke7\n4. Ke3    Kd7\n5. Kf4    Ke6\n6. Ke4    Kd7\n7. Kf5    Ke7\n8. g4        Ke8!\n9. Kf6!    Kf8\n10. g5    Ke8\n11. e6    Kf8\n12. e7+    Ke8",
            comment: "and White must  concede the draw.",
            initialBoard: "3k4/1K3p2/8/4P3/8/6P1/8/8 w - - 0 1"
        },
        {
            actions: "1.Kc6    Ke7\n2. Kd5    Kd7\n3. Kd4!    Ke7\n4. Ke3    Kd7\n5. Kf4    Ke6\n6. Ke4    Kd7\n7. Kf5    Ke7\n8. g4        Ke8!\n9. Kf6!    Kf8\n10. g5    Ke8\n11. Kg7!    Ke7\n12. Kg8    Ke6\n13. Kf8    Kxe5\n14. Kxf7",
            comment: "and White wins. ",
            initialBoard: "3k4/1K3p2/8/4P3/8/6P1/8/8 w - - 0 1"
        }
    ],
    "47": [
        {
            actions: "1. f6!   gxf6 \n2. f5  Kh2 \n3. Kg4   Kg2 \n4. Kh5   Kf3 \n5. Kg6   Kg4 \n6. Kxf6 Kh5 \n7. Kg7",
            initialBoard: "8/6p1/8/5P2/5P2/5K2/8/6k1 w - - 0 1"
        }
    ],
    "48": [
        {
            actions: "1. Kb5    Kc3 \n2. Kc5    Kd3 \n3. Kd5    Ke3 \n4. Ke5    Kf3 \n5. Kf5    Kg3 \n6. h6!    gxh6 \n7. h5   Kh4 \n8. Kg6    Kg4 \n9. Kxh6 Kf5 \n10. Kg7 ",
            initialBoard: "8/6p1/8/K6P/7P/1k6/8/8 w - - 0 1"
        },
        {
            actions: "1. Kb5    Kc3 \n2. Kc5    Kd3 \n3. Kd5    Ke3\n4. Ke5    Kf3\n5. Kf5    Kg3\n6. Kg6     Kxh4",
            comment: "\tand a draw.",
            initialBoard: "8/6p1/8/K6P/7P/1k6/8/8 w - - 0 1"
        }
    ],
    "49": [
        {
            actions: "1. Ke6!  Kf4\n2. Kf7   Kg3\n3. h5  Kh4 \n4. Kg6! Kxh3 \n5. Kxg7 ",
            initialBoard: "8/6p1/8/4K3/7P/4k2P/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf5    Kf3\n2. Kg6    Kg3\n3. h5        Kh4\n4. Kxg7     Kxh5",
            comment: "\twith draw as result.",
            initialBoard: "8/6p1/8/4K3/7P/4k2P/8/8 w - - 0 1"
        },
        {
            actions: "1. Ke6!    Kf4\n2. Kf7    g5\n3. h5        Kg3\n4. Kg6",
            comment: "White wins",
            initialBoard: "8/6p1/8/4K3/7P/4k2P/8/8 w - - 0 1"
        }
    ],
    "5": [
        {
            actions: "1. Kd5  Kd7 \n2. Kc5  Kd8 \n3. Kd6! Kc8 \n4. Kc6  Kb8 \n5. b7 Ka7 \n6. Kc7",
            initialBoard: "3k4/8/1P6/8/4K3/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd5    Kd7\n2. Kc5    Kd8\n3. Kc6    Kc8 \n4. b7+    Kb8\n5. Kb6",
            comment: "draws.",
            initialBoard: "3k4/8/1P6/8/4K3/8/8/8 w - - 0 1"
        }
    ],
    "50": [
        {
            actions: "1. e6!   fxe6 \n2. e5!   Ke7 \n3. Kc5   Kd7 \n4. Kb6   Kd8 \n5. Kc6   Ke7 \n6. Kc7   Ke8 \n7. Kd6   Kf7 \n8. Kd7   Kf8 \n9. Kxe6 Ke8 \n10. Kf6  Kf8 \n11. e6   Ke8 \n12. e7 ",
            initialBoard: "5k2/5p2/8/4P3/2K1P3/8/8/8 w - - 0 1"
        },
        {
            actions: "1. e6!     Ke7\n2. exf7    Kxf7\n3. Kd5    Ke7\n4. Ke5 ",
            comment: "again White  wins with the  opposition",
            initialBoard: "5k2/5p2/8/4P3/2K1P3/8/8/8 w - - 0 1"
        }
    ],
    "51": [
        {
            actions: "1. a5  Kc5 \n2. a4  Kd6 \n3. Kd8   c5 \n4. a6  Kc6 \n5. a5  c4 \n6. Kc8  c3 \n7. a7  c2 \n8. a8=Q+ Kd6\n9. Qh1",
            initialBoard: "4K3/8/2p5/8/P2k4/8/P7/8 w - - 0 1"
        }
    ],
    "52": [
        {
            actions: "1. Kf1  Kc3 \n2. Ke2  Kd4 \n3. g4 Ke4 \n4. g3 Kd4 \n5. g5 Ke5 \n6. g4 Ke6 \n7. Kxe3 Kf7 \n8. Ke4  Kg6 \n9. Kf4  Kf7 \n10. Kf5 Kg7 \n11. g6  Kg8 \n12. Kf6 Kf8 \n13. g7+ Kg8 \n14. g5  Kh7 \n15. g8=Q+ Kxg8 \n16. Kg6 ",
            initialBoard: "8/8/8/8/1k6/4p1P1/6P1/6K1 w - - 0 1"
        },
        {
            actions: "1. Kf1    Kc3\n2. Ke2    Kd4\n3. g4        Ke4\n4. g3        Kd4\n5. g5        Ke5\n6. g4        Ke6\n7. Kxe3    Kf7\n8. Kf4    Kg6",
            comment: "Pawn loss gives  Black an easy draw.",
            initialBoard: "8/8/8/8/1k6/4p1P1/6P1/6K1 w - - 0 1"
        },
        {
            actions: "1. Kf1    Kc3\n2. Ke2    Kd4\n3. g4        Ke4\n4. g3        Kd4\n5. g5        Ke5\n6. g4        Ke6\n7. Kxe3    Kf7\n8. Ke4    Kg6\n9. Kf4    Kf7\n10. Kf5    Kg7\n11. g6        Kh6\n12. Kf6",
            comment: "clumsy stalemating  of Black.",
            initialBoard: "8/8/8/8/1k6/4p1P1/6P1/6K1 w - - 0 1"
        },
        {
            actions: "1. Kf1    Kc3\n2. Ke2    Kd4\n3. g4        Ke4\n4. g3        Kd4\n5. g5        Ke5\n6. g4        Ke6\n7. Kxe3    Kf7\n8. Ke4    Kg6\n9. Kf4    Kf7\n10. Kf5    Kg7\n11. g6        Kh6\n12. g7     Kxg7\n13. Kg5",
            comment: "White having the opposition wins.",
            initialBoard: "8/8/8/8/1k6/4p1P1/6P1/6K1 w - - 0 1"
        },
        {
            actions: "1. Kf1    Kc3\n2. Ke2    Kd4\n3. g4        Ke4\n4. g3        Kd4\n5. g5        Ke5\n6. g4        Ke6\n7. Kxe3    Kf7\n8. Ke4    Kg6\n9. Kf4    Kf7\n10. Kf5    Kg7\n11. g6        Kg8\n12. Kf6    Kf8\n13. g7+    Kg8\n14. g5        Kh7\n15. Kf7",
            comment: "stalemating Black, deprives White  of the win.",
            initialBoard: "8/8/8/8/1k6/4p1P1/6P1/6K1 w - - 0 1"
        }
    ],
    "53": [
        {
            actions: "1. Kg3! Ke3 \n2. h4 Ke4 \n3. Kg4  Ke5 \n4. Kg5  Ke4 \n5. h5 Kf3 \n6. Kf5! Kg2 \n7. Kg6 ",
            initialBoard: "8/6p1/8/8/7K/7P/4k2P/8 w - - 0 1"
        },
        {
            actions: "1. Kg5    Kf3\n2. h4        Kg2\n3. h5        Kh3!\n4. Kg6    Kh4\n5. h3    Kxh3\n6. Kxg7",
            comment: "White wins.",
            initialBoard: "8/6p1/8/8/7K/7P/4k2P/8 w - - 0 1"
        },
        {
            actions: "1. Kg5    Kf3\n2. h4        Kg2\n3. h5        Kh3!\n4. Kg6    Kg4!\n5. h3+    Kh4\n6. Kxg7    Kxh5",
            comment: "Black draws. ",
            initialBoard: "8/6p1/8/8/7K/7P/4k2P/8 w - - 0 1"
        },
        {
            actions: "1. Kg4    Kf2\n2. h4        Kg2\n3. h3        g6\n4. Kg5    Kxh3",
            comment: "and the position  is drawn.",
            initialBoard: "8/6p1/8/8/7K/7P/4k2P/8 w - - 0 1"
        },
        {
            actions: "1. Kg3!    Kf1 \n2. h4    Ke2\n3. h5    Ke3\n4. h4    Ke4\n5. Kg4    Ke3\n6. Kf5    Kf3\n7. h6        gxh6\n8. h5",
            comment: "White wins",
            initialBoard: "8/6p1/8/8/7K/7P/4k2P/8 w - - 0 1"
        },
        {
            actions: "1. Kg3!    Kf1\n2. h4    g6\n3. Kf4!    Kg2\n4. h5!    gxh5\n5. h4",
            comment: "White wins again.",
            initialBoard: "8/6p1/8/8/7K/7P/4k2P/8 w - - 0 1"
        },
        {
            actions: "1. Kg3!    Ke3 \n2. h4        Ke4\n3. Kg4    Ke5\n4. Kg5    Ke4\n5. h5        Kf3\n6. Kg6    Kg4\n7. h3+    Kh4",
            comment: "ends in a draw.",
            initialBoard: "8/6p1/8/8/7K/7P/4k2P/8 w - - 0 1"
        }
    ],
    "54": [
        {
            actions: "1. a5 Kc6 \n2. a6 Kb6 \n3. a7 Kxa7 \n4. Kxc5 Kb7 \n5. Kd6  Kc8 \n6. Ke6  Kd8 \n7. Kxf5 Ke7 \n8. Kg6  Ke6 \n9. f5+  Ke7 \n10. Kg7 ",
            initialBoard: "8/8/3k4/2p2p2/P1K2P2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. a5        Kc6\n2. a6        Kb6\n3. a7        Kxa7\n4. Kxc5    Kb7\n5. Kd6      Kc8\n6. Ke6     Kd8\n7. Kxf5    Ke7\n8. Kg6    Kf8\n9. Kf6 ",
            comment: "White wins with  or without move.",
            initialBoard: "8/8/3k4/2p2p2/P1K2P2/8/8/8 w - - 0 1"
        }
    ],
    "55": [
        {
            actions: "1. a4 h5 \n2. a5 h4 \n3. b6 axb6 \n4. a6!  h3 \n5. a7 h2 \n6. a8=Q",
            initialBoard: "8/p5kp/8/1P6/8/1K6/P7/8 w - - 0 1"
        },
        {
            actions: "1. a4        Kf7\n2. a5        Ke7\n3. b6        Kd7\n4. bxa7    Kc7",
            comment: "White Queens  and wins.",
            initialBoard: "8/p5kp/8/1P6/8/1K6/P7/8 w - - 0 1"
        },
        {
            actions: "1. a4        Kf7\n2. a5        Ke7\n3. b6     axb6\n4. a6!",
            comment: "again White wins.",
            initialBoard: "8/p5kp/8/1P6/8/1K6/P7/8 w - - 0 1"
        },
        {
            actions: "1. a4        h5\n2. a5        h4\n3. b6     axb6\n4. axb6    h3\n5. b7        h2 \n6. b8=Q    h1=Q",
            comment: "position is a draw.",
            initialBoard: "8/p5kp/8/1P6/8/1K6/P7/8 w - - 0 1"
        }
    ],
    "56": [
        {
            actions: "1. Kf4  Kb6 \n2. Kf5  Kc7 \n3. Kf6  Kb6 \n4. Ke6  Kc7 \n5. Kd5  h5 \n6. b6+  Kxb6 \n7. Kxd6 h4 \n8. c7 Kb7 \n9. Kd7 ",
            initialBoard: "8/2k5/2Pp3p/1P6/8/5K2/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf4    h5\n2. Kg5    d5\n3. Kxh5    d4\n4. Kg4    d3\n5. Kf3",
            comment: "White overtakes  the Pawn.",
            initialBoard: "8/2k5/2Pp3p/1P6/8/5K2/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf4    h5\n2. Kg5    Kb6\n3. Kxh5    Kc7\n4. Kg5    Kb6\n5. Kf5    Kc7\n6. Ke6",
            comment: "and the second  Pawn goes.",
            initialBoard: "8/2k5/2Pp3p/1P6/8/5K2/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf4    Kb6\n2. Kf5    Kc7\n3. Kf6    h5\n4. Kg5",
            comment: "White in time  to catch the  second Pawn.",
            initialBoard: "8/2k5/2Pp3p/1P6/8/5K2/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf4    Kb6\n2. Kf5    Kc7\n3. Kf6    Kb6\n4. Ke6    h5\n5. Kxd6    h4\n6. c7    h3\n7. c8=Q    h2\n8. Qa6#",
            comment: "",
            initialBoard: "8/2k5/2Pp3p/1P6/8/5K2/8/8 w - - 0 1"
        }
    ],
    "57": [
        {
            actions: "1. Kf7! h5 \n2. h4!  Kh6 \n3. Kf6! hxg4 \n4. hxg5+  Kh5 \n5. g6 g3 \n6. g7 Kg4 \n7. g8=Q+ Kf3 \n8. Kg5  g2 \n9. Kh4  Kf2 \n10. Qg3+  Kf1 \n11. Qf3+  Kg1 \n12. Kh3 Kh1 \n13. Qxg2# ",
            initialBoard: "8/7k/4K2p/6p1/6P1/7P/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf7!    Kh8\n2. Kg6",
            comment: "wins both Black  Pawns.",
            initialBoard: "8/7k/4K2p/6p1/6P1/7P/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf7!    h5\n2. Kf6    hxg4\n3. hxg4    Kh8\n4. Kxg5    Kg7",
            comment: "Black gets the  opposition with easy draw.",
            initialBoard: "8/7k/4K2p/6p1/6P1/7P/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf7!    h5\n2. h4!    hxg4\n3. hxg5    g3\n4. g6+    Kh6\n5. g7        g2\n6. g8=Q",
            comment: "White wins.",
            initialBoard: "8/7k/4K2p/6p1/6P1/7P/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf7!    h5\n2. h4!    gxh4\n3. g5    h3\n4. g6+    Kh6\n5. g7    h2\n6. g8=Q    h1=Q\n7. Qg6#",
            comment: "",
            initialBoard: "8/7k/4K2p/6p1/6P1/7P/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf7!    h5\n2. h4!    Kh6\n3. Kf6!    gxh4\n4. g5+    Kh7\n5. Kf7",
            comment: "and White wins.",
            initialBoard: "8/7k/4K2p/6p1/6P1/7P/8/8 w - - 0 1"
        }
    ],
    "58": [
        {
            actions: "1. Kf4! Kg8 \n2. Ke5  Kf8 \n3. Kd6! Ke8 \n4. Ke6  Kf8 \n5. Kd7  Kg8 \n6. Ke7  Kh8 \n7. Kd6  Kg8 \n8. Kc5  Kf8 \n9. Kb4  Ke7 \n10. Kxa3  Kd6 \n11. Kb4 Kc6 \n12. a4  Kb6 \n13. Kc4 Kc6 \n14. a5  Kc7 \n15. Kd5",
            initialBoard: "7k/6p1/6P1/8/8/p5K1/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf3    Kg8\n2. Ke3    Kf8\n3. Kd3    Ke7\n4. Kc3    Kf6\n5. Kb3    Kxg6\n6. Kxa3    Kf5\n7. Kb4    g5\n8. a4",
            comment: "both sides Queen.  and draw.",
            initialBoard: "7k/6p1/6P1/8/8/p5K1/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf4!    Kg8\n2. Ke5    Kf8\n3. Kd6!    Ke8\n4. Ke6    Kd8\n5. Kf7",
            comment: "Blacks’ outreach  is fatal.",
            initialBoard: "7k/6p1/6P1/8/8/p5K1/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kf4!    Kg8\n2. Ke5    Kf8\n3. Kd6!    Ke8\n4. Ke6    Kf8\n5. Kd7    Kg8\n6. Ke7    Kh8\n7. Kd6    Kg8\n8. Kc5    Kf8\n9. Kb4    Ke7\n10. Kxa3    Kf6\n11. Kb4    Kxg6\n12. a4        Kf5\n13. a5        g5\n14. a6    g4\n15. a7    g3\n16. a8=Q    Kf4\n17. Qg2",
            comment: "and White wins.",
            initialBoard: "7k/6p1/6P1/8/8/p5K1/P7/8 w - - 0 1"
        }
    ],
    "59": [
        {
            actions: "1. Kf2  Kh3 \n2. Kg1  Kh4 \n3. Kg2  g3 \n4. Kg1! g2 \n5. Kh2! g1=Q+ \n6. Kxg1 Kg3 \n7. f5 ",
            initialBoard: "8/8/8/7p/5Ppk/4KP2/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf2    g3+\n2. Kg2",
            comment: "stalemate",
            initialBoard: "8/8/8/7p/5Ppk/4KP2/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf2    gxf2\n2. Kxf3    Kh3\n3. f5        h4\n4. f6,        Kh2\n5. f7        h3\n6. f8=Q    Kg1\n7. Qh8    h2\n8. Qa1#",
            comment: "",
            initialBoard: "8/8/8/7p/5Ppk/4KP2/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf2    Kh3\n2. f5        Kh2!",
            comment: "Black will be  first to Queen.",
            initialBoard: "8/8/8/7p/5Ppk/4KP2/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf2    Kh3\n2. Kg1    Kh4\n3. Kg2    g3\n4. Kh1    Kh3\n5. f5        g2+\n6. Kg1    Kg3\n7. f6        h4\n8. f7        h3\n9. f8=Q    h2#!",
            comment: "serving White a  bewildering blow!",
            initialBoard: "8/8/8/7p/5Ppk/4KP2/8/8 w - - 0 1"
        },
        {
            actions: "1. Kf2    Kh3\n2. Kg1    Kh4\n3. Kg2    g3\n4. Kg1    g2\n5. Kxg2",
            comment: "stalemating Black is unthinkable.",
            initialBoard: "8/8/8/7p/5Ppk/4KP2/8/8 w - - 0 1"
        }
    ],
    "6": [
        {
            actions: "1. Kg6! Kf8 \n2. Kf6  Ke8 \n3. Ke6  Kd8 \n4. Kd6  Kc8 \n5. Kc6  Kb8 \n6. Kd7  Kb7 \n7. c5 Kb8 \n8. c6 Ka7 \n9. c7 ",
            initialBoard: "6k1/8/7K/8/2P5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. c5    Kf7\n2. Kg5    Ke6",
            comment: "Black pinches off King, wins the Pawn and draws.",
            initialBoard: "6k1/8/7K/8/2P5/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kg6!     Kf8\n2. Kf6     Ke8\n3. Ke6     Kd8\n4. Kd6     Kc8\n5. Kc6      Kd8\n6. Kb7     Ke7\n7. c5",
            comment: "White wins when Pawn  cannot be stopped. ",
            initialBoard: "6k1/8/7K/8/2P5/8/8/8 w - - 0 1"
        }
    ],
    "60": [
        {
            actions: "1. Kc4! Kxf4 \n2. d5 Ke5 \n3. Kc5  f4 \n4. d6 f3 \n5. d7 f2 \n6. d8=Q f1=Q \n7. Qe8+ Kf5 \n8. Qf8+ ",
            initialBoard: "8/8/8/p2K1p2/3P1Pk1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc4!    a4\n2. d5    a3\n3. Kb3",
            comment: "hopeless for Black.",
            initialBoard: "8/8/8/p2K1p2/3P1Pk1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kc4!    Kxf4\n2. d5        Ke5\n3. Kc5    f4\n4. d6        Ke6\n5. Kc6    f3\n6. d7    f2\n7. d8=Q    f1=Q\n8. Qe8+    Kf6\n9. Qf8+",
            comment: "White wins the  Queen.",
            initialBoard: "8/8/8/p2K1p2/3P1Pk1/8/8/8 w - - 0 1"
        }
    ],
    "61": [
        {
            actions: "1. Kd4! Ke6 \n2. Kc5  Ke5 \n3. Kb5  Kd4 \n4. g5!  fxg5 \n5. c5 a4 \n6. c6 a3 \n7. c7 a2 \n8. c8=Q a1=Q \n9. Qh8+ ",
            initialBoard: "8/5k2/5p2/p7/2P1K1P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. c5        Ke6\n2. Kd4    a4\n3. Kc4    a3\n4. Kb3    Kd5",
            comment: "White loses  instead of winning.",
            initialBoard: "8/5k2/5p2/p7/2P1K1P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd4!    a4\n2. Kc3    Ke6\n3. Kb4",
            comment: "wins for White.",
            initialBoard: "8/5k2/5p2/p7/2P1K1P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd4!    Ke6\n2. Kc5    Ke5\n3. Kb5    Kd4\n4. c5        a4\n5. c6        a3",
            comment: "with a comfortable  draw.",
            initialBoard: "8/5k2/5p2/p7/2P1K1P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd4!    Ke6\n2. Kc5    Ke5\n3. Kb5    Kd4\n4. g5!    fxg5\n5. c5        g4\n6. c6        g3\n7. c7        g2\n8. c8=Q    g1=Q\n9. Qc5",
            comment: "and White wins  the Queen.",
            initialBoard: "8/5k2/5p2/p7/2P1K1P1/8/8/8 w - - 0 1"
        }
    ],
    "62": [
        {
            actions: "1. a5!  Kc6 \n2. Kb8! Kb5 \n3. Kb7  Kxa5 \n4. Kc6  f5 \n5. gxf5 g4 \n6. f6 g3 \n7. f7 g2 \n8. f8=Q g1=Q \n9. Qa3#! ",
            initialBoard: "2K5/8/5p2/3k2p1/P5P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kd8    Kc6\n2. Ke7    f5!\n3. gxf5    g4",
            comment: "both sides Queen  with draw result.",
            initialBoard: "2K5/8/5p2/3k2p1/P5P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. a5!    Kc6\n2. Kb8!    Kb5\n3. Kb7    f5\n4. a6        fxg4\n5. a7        g3\n6. a8=Q    g2\n7. Qa1",
            comment: "White wins.",
            initialBoard: "2K5/8/5p2/3k2p1/P5P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. a5!    Kc6\n2. Kb8!    Kb5\n3. Kb7    Kxa5\n4. Kc6    Ka6\n5. Kd5    f5\n6. gxf5    g4\n7. Ke4",
            comment: "Black's Pawn  is lost.",
            initialBoard: "2K5/8/5p2/3k2p1/P5P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. a5!    Kc6\n2. Kb8!    Kb5\n3. Kb7    Kxa5\n4. Kc6    Kb4\n5. Kd5    f5\n6. gxf5    g4\n7.f6",
            comment: "Pawn reaches f8,  with check win.",
            initialBoard: "2K5/8/5p2/3k2p1/P5P1/8/8/8 w - - 0 1"
        }
    ],
    "63": [
        {
            actions: "1. a3!  h5 \n2. Kg3  h4+ \n3. Kh3! Kxa3 \n4. c5 a4 \n5. c6 Kb2 \n6. c7 a3 \n7. c8=Q a2 \n8. Qb7+ Kc2 \n9. Qc6+ Kb2 \n10. Qb5+  Kc2 \n11. Qa4+  Kb2 \n12. Qb4+  Kc2 \n13. Qa3 Kb1 \n14. Qb3+  Ka1 \n15. Kg4!  h3 \n16. Qc2 h2 \n17. Qc1# ",
            initialBoard: "8/8/7p/p7/k1P2K2/8/P7/8 w - - 0 1"
        },
        {
            actions: "1. Ke5    h5\n2. c5     h4\n3. c6    h3\n4. c7        h2\n5. c8=Q    h1=Q\n6. Qc4+    Ka3\n7. Qb3#",
            comment: "",
            initialBoard: "8/8/7p/p7/k1P2K2/8/P7/8 w - - 0 1"
        },
        {
            actions: "1. Ke5    h5\n2. c5        Kb5!\n3. Kd6    h4\n4. c6        h3\n5. c7        h2\n6. c8=Q    h1=Q\n7. Qc5+     Ka6!",
            comment: "results in a draw.",
            initialBoard: "8/8/7p/p7/k1P2K2/8/P7/8 w - - 0 1"
        }
    ],
    "64": [
        {
            actions: "1. b6 b3 \n2. b7 b2 \n3. b8=R!  Ka2 \n4. Ka4  b1=Q \n5. Rxb1 Kxb1 \n6. Kb3 ",
            initialBoard: "8/8/8/KP6/1p6/k4p2/5P2/8 w - - 0 1"
        },
        {
            actions: "1. b6        b3\n2. b7        b2\n3. b8=Q    b1=Q\n4. Qxb1",
            comment: "with stalemate.",
            initialBoard: "8/8/8/KP6/1p6/k4p2/5P2/8 w - - 0 1"
        }
    ],
    "65": [
        {
            actions: "1. Ke4  Kd6 \n2. Kd4  Ke6 \n3. Kc5  Kf5 \n4. Kxb5 Kg4 \n5. Kc4  Kxh4 \n6. b5 Kg3 \n7. b6 h4 \n8. b7 h3 \n9. b8=Q+ Kg2 \n10. Qg8+  Kf2 \n11. Qd5 Kg1 \n12. Qg5+  Kf2 \n13. Qh4+  Kg2 \n14. Qg4+  Kh2 \n15. Kd4 Kh1 \n16. Qxh3+  ",
            initialBoard: "8/8/4k3/1p5p/1P5P/4K3/8/8 w - - 0 1"
        },
        {
            actions: "1. Ke4    Kd6\n2. Kd4    Kc6\n3. Ke5    Kb6\n4. Kd5    Ka6\n5. Kc5    Ka7\n5. Kxb5",
            comment: "White wins.",
            initialBoard: "8/8/4k3/1p5p/1P5P/4K3/8/8 w - - 0 1"
        },
        {
            actions: "1. Ke4    Kd6\n2. Kd4    Kc6\n3. Ke5    Kb6\n4. Kf5    Kc6\n5. Kg5    Kd6\n6. Kxh5",
            comment: "White wins.",
            initialBoard: "8/8/4k3/1p5p/1P5P/4K3/8/8 w - - 0 1"
        },
        {
            actions: "1. Ke4    Kf6\n2. Kd5    Kf5\n3. Kc5    Kg4\n4. Kxb5    Kxh4\n5. Kc5    Kg4\n6. b5        h4\n7. b6        h3\n8. b7        h2\n9. b8=Q    h1=Q",
            comment: "and a draw.",
            initialBoard: "8/8/4k3/1p5p/1P5P/4K3/8/8 w - - 0 1"
        }
    ],
    "66": [
        {
            actions: "1. Ke7! Ke2 \n2. Ke6! Ke3 \n3. Ke5! Ke2 \n4. Ke4! Ke1 \n5. Ke3! Kf1 \n6. Kf4  Ke2 \n7. Kg5  Kd3 \n8. Kxh5 Kc4 \n9. Kg4  Kxb4 \n10. h5  Ka3 \n11. h6   b4 \n12. h7  b3 \n13. h8=Q  b2 \n14. Qc3+  Ka2 \n15. Qc2 Ka1 \n16. Qa4+  Kb1 \n17. Kf3 Kc1 \n18. Qc4+  Kd2 \n19. Qb3 Kc1 \n20. Qc3+  Kb1 \n21. Ke3 Ka2 \n22. Qc2 Ka1 \n23. Qa4+  Kb1 \n24. Kd3 Kc1 \n25. Qc2# ",
            initialBoard: "4K3/8/8/1p5p/1P5P/8/8/4k3 w - - 0 1"
        },
        {
            actions: "1. Ke7!    Kd2\n2. Kd6    Kc3\n3. Kc5    Kb3\n4. Kxb5!",
            comment: "White wins.",
            initialBoard: "4K3/8/8/1p5p/1P5P/8/8/4k3 w - - 0 1"
        },
        {
            actions: "1. Ke7!    Kf2\n2. Kf6    Kg3\n3. Kg5    Kh3\n4. Kxh5!",
            comment: "White wins again.",
            initialBoard: "4K3/8/8/1p5p/1P5P/8/8/4k3 w - - 0 1"
        },
        {
            actions: "1. Ke7!    Ke2\n2. Ke6!    Kd3\n3. Kd5    Kc3\n4. Kc5    Kb3\n5. Kxb5!",
            comment: "White wins.",
            initialBoard: "4K3/8/8/1p5p/1P5P/8/8/4k3 w - - 0 1"
        },
        {
            actions: "1. Ke7!    Ke2\n2. Ke6!    Kf3\n3. Kf5    Kg3\n4. Kg5    Kh3 \n5. Kxh5!    ",
            comment: "White wins.",
            initialBoard: "4K3/8/8/1p5p/1P5P/8/8/4k3 w - - 0 1"
        }
    ],
    "67": [
        {
            actions: "1. a4 Kd6 \n2. Kb6  Kd7 \n3. Kb7  h5 \n4. a5 h4 \n5. a6 h3 \n6. a7 h2 \n7. a8=Q h1=Q \n8. Qc8+ Kd6 \n9. Qc6+ Ke5 \n10. f4+",
            initialBoard: "8/4p2p/8/1K1k4/8/5P2/P7/8 w - - 0 1"
        },
        {
            actions: "68.VAR-1 \n1. a5        Kc5\n2. Kb2!    Kb5\n3. Kc3    Kxa5\n4. Kd4    Kb5\n5. Ke4    Kc6\n6. Kf5    Kd7\n7. Kxf6    Ke8\n8. Kxg5    Kf7\n9. Kh6    Kg8\n10. Kg6",
            comment: " White wins.",
            initialBoard: "8/4p2p/8/1K1k4/8/5P2/P7/8 w - - 0 1"
        }
    ],
    "68": [
        {
            actions: "1. a5 Kc5 \n2. Kb2! f5 \n3. gxf5 g4 \n4. f6!  Kd6 \n5. a6 g3 \n6. f7 Ke7 \n7. a7 g2 \n8. f8=Q+   Kxf8 \n9. a8=Q+ Ke7 \n10. Qxg2",
            initialBoard: "8/8/5p2/6p1/P2k2P1/8/8/K7 w - - 0 1"
        }
    ],
    "69": [
        {
            actions: "1. f4 Kb4 \n2. h4 d5 \n3. f5!  Kc5 \n4. h5 d4 \n5. f6 Kd6 \n6. h6 d3 \n7. f7!  Ke7 \n8. h7 d2 \n9. f8=Q+   Kxf8 \n10. h8=Q+ Ke7 \n11. Qd4 ",
            initialBoard: "8/p2p4/8/8/8/k7/5P1P/7K w - - 0 1"
        },
        {
            actions: "1. f4        d5\n2. f5        d4\n3. f6        d3\n4. f7        d2\n5. f8=Q+",
            comment: "White wins.",
            initialBoard: "8/p2p4/8/8/8/k7/5P1P/7K w - - 0 1"
        }
    ],
    "7": [
        {
            actions: "1. Kf7! Kh8 \n2. Kg6! Kg8 \n3. Kh6  Kh8 \n4. g6 Kg8 \n5. g7 Kf7 \n6. Kh7  Ke7 \n7. g8=Q ",
            initialBoard: "8/7k/5K2/6P1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. g6+    Kh8   \n2. Kf7",
            comment: "stalemates Black.",
            initialBoard: "8/7k/5K2/6P1/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. g6+    Kh8   \n2. g7+    Kg8 \n3. Kg6",
            comment: "\tBlack is stalemated.",
            initialBoard: "8/7k/5K2/6P1/8/8/8/8 w - - 0 1"
        }
    ],
    "70": [
        {
            actions: "1. a5 Kb5 \n2. Kd5  Kxa5 \n3. Ke6  f5 \n4. gxf5 gxf5 \n5. Kxf5 Kb6 \n6. Kg6  Kc7 \n7. Kxh6 Kd7 \n8. h5 Ke7 \n9. Kg7",
            initialBoard: "8/8/2k2ppp/8/P2K2PP/8/8/8 w - - 0 1"
        }
    ],
    "71": [
        {
            actions: "1. g4 a5 \n2. a4 Kf6 \n3. h4 Ke6 \n4. g5 Kf7 \n5. Kf5  Kg7 \n6. h5 Kf7 \n7. Ke5  Ke7 \n8. g6 hxg6 \n9. hxg6 Ke8 \n10. Kd5 Kf8 \n11. Kc5 ",
            initialBoard: "8/p6p/4k3/8/4K3/8/P5PP/8 w - - 0 1"
        },
        {
            actions: "1. g4    a5\n2. a4    Kf6\n3. h4    Kg6\n4. Kd5    Kf6\n5. Kc5    Ke5\n6. Kb5    Kf4\n7. Kxa5    Kxg4\n8. Kb6",
            comment: "\tand White will Queen the Pawn.",
            initialBoard: "8/p6p/4k3/8/4K3/8/P5PP/8 w - - 0 1"
        }
    ],
    "72": [
        {
            actions: "1. g4+  hxg4+ \n2. Kg3  Kg6 \n3. Kxg4 Kh6 \n4. Kf5  Kh5 \n5. Ke5  Kxh4 \n6. Kd5  Kg5 \n7. Kc5  Kf6 \n8. Kxb5 Ke7 \n9. Kc6  Kd8 \n10. Kb7 Kd7 \n11. b5 ",
            initialBoard: "8/8/8/1p3k1p/1P5P/5KP1/8/8 w - - 0 1"
        },
        {
            actions: "1. g4+!    Kg6\n2. g5",
            comment: "White works a passed  Pawn on the King side.",
            initialBoard: "8/8/8/1p3k1p/1P5P/5KP1/8/8 w - - 0 1"
        },
        {
            actions: "1. g4+!    hxg4+\n2. Kg3    Ke5\n3. Kxg4    Kd4\n4. h5    Kc4\n5. h6",
            comment: "Rook Pawn Queens  long before Black  can.  White wins.",
            initialBoard: "8/8/8/1p3k1p/1P5P/5KP1/8/8 w - - 0 1"
        }
    ],
    "73": [
        {
            actions: "1. c6!  Kb6 \n2. d6!  exd6 \n3. f5 Kc7 \n4. f6 Kd8 \n5. c7+  Kxc7 \n6. f7",
            initialBoard: "8/3pp2p/8/1kPP4/5P2/8/1K6/8 w - - 0 1"
        },
        {
            actions: "1. c6!    dxc6\n2. d6    exd6\n3. f5",
            comment: "Pawn marches  merrily up the board  and Queens.",
            initialBoard: "8/3pp2p/8/1kPP4/5P2/8/1K6/8 w - - 0 1"
        }
    ],
    "74": [
        {
            actions: "1. g6 h6 \n2. Kd5  Kf6 \n3. Ke4  Kg5 \n4. Ke5  Kxh5 \n5. Ke6  Kg5 \n6. f6!  gxf6 \n7. g7 ",
            initialBoard: "8/4k1pp/8/4KPPP/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. g6!    hxg6\n2. hxg6    Kf8\n3. Kd6    Ke8\n4. Ke6    Kd8\n5. Kf7",
            comment: "ends the struggle.",
            initialBoard: "8/4k1pp/8/4KPPP/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. g6!    hxg6\n2. hxg6    Kf8\n3. Kd6    Ke8\n4. Ke6    Kf8\n5. Kd7    Kg8\n6. Ke7    Kh8\n7. f6    gxf6\n8. Kf7    f5\n9. g7+ ",
            comment: "and White mates in two.",
            initialBoard: "8/4k1pp/8/4KPPP/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. g6!    h6\n2. f6+    gxf6+\n3. Kf5    Kf8\n4. Kxf6    Kg8\n5. g7    Kh7",
            comment: "Black has a draw.",
            initialBoard: "8/4k1pp/8/4KPPP/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. g6!    h6\n2. Kd5    Kd7\n3. f6 ",
            comment: "Pawn will Queen,  and win.",
            initialBoard: "8/4k1pp/8/4KPPP/8/8/8/8 w - - 0 1"
        },
        {
            actions: "1. g6!    h6\n2. Kd5    Kf6\n3. Ke4    Kg5\n4. Ke5    Kxh5\n5. Ke6    Kg5\n6. f6!    Kxg6\n7. f7\n8. f8=Q",
            comment: "",
            initialBoard: "8/4k1pp/8/4KPPP/8/8/8/8 w - - 0 1"
        }
    ],
    "75": [
        {
            actions: "1. Kb4  Kd4 \n2. a4 Kd5 \n3. a5 bxa5+ \n4. Ka4! Kc5 \n5. Kxa5 Kd6 \n6. b6 axb6+ \n7. Kxb6 ",
            initialBoard: "8/p7/Pp6/1P6/8/K2k4/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kb4    Kd4\n2. a4      Kd5\n3. a5    Kd6\n4. axb6",
            comment: "wins at once.",
            initialBoard: "8/p7/Pp6/1P6/8/K2k4/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kb4    Kd4\n2. a4      Kd5\n3. a5    bxa5+\n4. Kxa5    Kc5\n5. Ka4    Kb6.",
            comment: "Black draws.",
            initialBoard: "8/p7/Pp6/1P6/8/K2k4/P7/8 w - - 0 1"
        },
        {
            actions: "1. Kb4    Kd4\n2. a4    Kd5\n3. a5    bxa5+\n4. Ka4!    Kc5\n5. Kxa5    Kd6\n6. b6    Kc6\n7. bxa7 ",
            comment: "is conclusive.",
            initialBoard: "8/p7/Pp6/1P6/8/K2k4/P7/8 w - - 0 1"
        }
    ],
    "76": [
        {
            actions: "1. Ke2  Kb7 \n2. Kd3  Ka8 \n3. Kc4  Kb7 \n4. Kc5  f3 \n5. Kd6  f2 \n6. a8=Q+ Kxa8 \n7. Kc7  f1=Q \n8. b7+  Ka7 \n9. b8=Q+ Ka6 \n10. Qb6# ",
            initialBoard: "k7/P7/1P6/4p3/4Pp2/5K2/8/8 w - - 0 1"
        },
        {
            actions: "1. Ke2    Kb7\n2. Kd3    Ka8\n3. Kc4    f3\n4. Kd3",
            comment: "winning the Pawn  is the penalty.",
            initialBoard: "k7/P7/1P6/4p3/4Pp2/5K2/8/8 w - - 0 1"
        }
    ],
    "77": [
        {
            actions: "1. Ke4  Kg4 \n2. h4 Kh5 \n3. Kf4  Kh6 \n4. g4 Kg6 \n5. h5+  Kh6 \n6. Ke4  Kg5 \n7. Kf3  Kh6 \n8. Kf4  Kh7 \n9. g5 Kg7 \n10. g6  Kh6 \n11. Kg4 Kg7 \n12. Kg5!  d3 \n13. h6+ Kg8 \n14. Kf6 d2 \n15. h7+ Kh8 \n16. Kf7 d1=Q \n17. g7+ Kxh7 \n18. g8=Q+ Kh6 \n19. Qg6# ",
            initialBoard: "8/8/8/2p5/2Pp4/3K2Pk/7P/8 w - - 0 1"
        },
        {
            actions: "1. Ke4    Kxh2\n2. g4",
            comment: "the passed Pawn  can never be caught.",
            initialBoard: "8/8/8/2p5/2Pp4/3K2Pk/7P/8 w - - 0 1"
        },
        {
            actions: "1. Ke4    Kg4\n2. h4    Kh5\n3. Kf4    Kh6\n4. g4    Kg6\n5. h5+    Kh6\n6. Ke4    Kg5\n7. Kf3    Kh6\n8. Kf4    Kh7\n9. g5    Kg7\n10. g6        Kh6\n11. Kg4    d3\n12. Kf3",
            comment: "will win the Pawn.",
            initialBoard: "8/8/8/2p5/2Pp4/3K2Pk/7P/8 w - - 0 1"
        }
    ],
    "78": [
        {
            actions: "1. a3 f5 \n2. gxf5 g4 \n3. f6 g3 \n4. f7 g2 \n5. f8=Q g1=Q \n6. Qc8+ Ka5 \n7. Qc3+ Kb6 \n8. a5+  Kb5 \n9. Qb4+ Ka6 \n10. Qb7+  Kxa5 \n11. Qb4+  Ka6 \n12. Qa4+  Kb6 \n13. Qa7+ ",
            initialBoard: "K7/5p2/k7/6p1/P5P1/8/P7/8 w - - 0 1"
        },
        {
            actions: "1. a3!    Ka5\n2. Kb7    f5\n3. gxf5    g4\n4. f6    g3\n5. f7    g2\n6. f8=Q    g1=Q\n7. Qb4#",
            comment: "",
            initialBoard: "K7/5p2/k7/6p1/P5P1/8/P7/8 w - - 0 1"
        },
        {
            actions: "1. a3!    Ka5\n2. Kb7    Kxa4\n3. Kc6    Kxa3\n4. Kd5    Kb4\n5. Ke5    Kc5\n6. Kf6    Kd6\n7. Kxf7    Ke5\n8. Kg6     Kf4\n9. Kh5    Ke5\n10. Kxg5    Ke6\n11. Kg6    Ke7\n12. g5    Kf8\n13. Kh7",
            comment: "White wins.",
            initialBoard: "K7/5p2/k7/6p1/P5P1/8/P7/8 w - - 0 1"
        },
        {
            actions: "1. a3!    f5\n2. gxf5    g4\n3. f6        g3\n4. f7        g2\n5. f8=Q    g1=Q\n6. Qc8+    Kb6\n7. Qb7+    Ka5\n8. Qb5# ",
            comment: "",
            initialBoard: "K7/5p2/k7/6p1/P5P1/8/P7/8 w - - 0 1"
        },
        {
            actions: "1. a3!    f5\n2. gxf5    g4\n3. f6        g3\n4. f7        g2\n5. f8=Q    g1=Q\n6. Qc8+    Kb6\n7. Qb7+    Kc5\n8. Qa7+",
            comment: "White wins the  Queen.",
            initialBoard: "K7/5p2/k7/6p1/P5P1/8/P7/8 w - - 0 1"
        },
        {
            actions: "1. a3!    f5\n2. gxf5    g4\n3. f6        g3\n4. f7        g2\n5. f8=Q    g1=Q\n6. Qc8+    Ka5\n7. Qc3+    Ka6\n8. Qc4+    Kb6\n9. a5+    Kxa5\n10. Qb4+    Ka6\n11. Qa4+    Kb6\n12. Qa7+",
            comment: "again White wins the Queen.",
            initialBoard: "K7/5p2/k7/6p1/P5P1/8/P7/8 w - - 0 1"
        },
        {
            actions: "1. a3!    f5\n2. gxf5    g4\n3. f6        g3\n4. f7        g2\n5. f8=Q    g1=Q\n6. Qc8+    Ka5\n7. Qc3+    Ka6\n8. Qc4+    Kb6\n9. a5+    Kxa5\n10. Qb4+    Ka6\n11. Qa4+    Kb6\n12. Qa7+",
            comment: "again White wins  the Queen.",
            initialBoard: "K7/5p2/k7/6p1/P5P1/8/P7/8 w - - 0 1"
        },
        {
            actions: "1. a3!    f5\n2. gxf5    g4\n3. f6        g3\n4. f7        g2\n5. f8=Q    g1=Q\n6. Qc8+    Ka5\n7. Qc3+    Kb6\n8. a5+    Kb5\n9. Qb4+    Kc6\n10. Qb7+    Kd3\n11. Qb6+",
            comment: "brutal but con- vincing Queen  exchange.",
            initialBoard: "K7/5p2/k7/6p1/P5P1/8/P7/8 w - - 0 1"
        }
    ],
    "79": [
        {
            actions: "1. f3 gxf3+ \n2. Kxf3 Kf5 \n3. g4+  Kg5 \n4. b4 b6 \n5. a4 Kg6 \n6. Kf4  Kf6 \n7. g5+  Kg6 \n8. b5 a5 \n9. Kg4  Kg7 \n10. Kf5 Kf7 \n11. Ke5 Ke7 \n12. g6  Ke8 \n13. Kd6 Kf8 \n14. Kc6 ",
            initialBoard: "8/1p6/p3k3/8/6p1/PP6/4KPP1/8 w - - 0 1"
        },
        {
            actions: "1.  f3    g3\n2. f4        b6\n3. Kf3",
            comment: "wins the luckless  Pawn.",
            initialBoard: "8/1p6/p3k3/8/6p1/PP6/4KPP1/8 w - - 0 1"
        }
    ],
    "8": [
        {
            actions: "1. Ke4  Ke6 \n2. e3!  Kd6 \n3. Kf5  Ke7 \n4. Ke5  Kd7 \n5. Kf6  Ke8 \n6. Ke6  Kf8 \n7. e4 Ke8 \n8. e5 Kf8 \n9. Kd7  Kf7 \n10. e6+ Kf8 \n11. e7+",
            initialBoard: "8/8/5k2/8/5K2/8/4P3/8 w - - 0 1"
        },
        {
            actions: "1. Ke4    Ke6\n2. e3!    Kd6\n3. Kf5    Kd5\n4. e4+    Kd6\n5. Kf6!    Kd7\n6. e5    Ke8\n7. Ke6",
            comment: "familiar opposition and White wins.",
            initialBoard: "8/8/5k2/8/5K2/8/4P3/8 w - - 0 1"
        },
        {
            actions: "1. Ke4    Ke6\n2. e3!    Kd6\n3. Kf5    Ke7\n4. Ke5    Kd7\n5. Kf6    Kd6\n6. e4    Kd7\n7. e5    Ke8\n8. Ke6",
            comment: "White wins.",
            initialBoard: "8/8/5k2/8/5K2/8/4P3/8 w - - 0 1"
        },
        {
            actions: "1. Ke4    Ke6\n2. e3!    Kd6\n3. Kf5    Ke7\n4. Ke5    Kd7\n5. Kf6    Kd6\n6. e4    Kd7\n7. e5    Kd8\n8. Kf7",
            comment: "White wins.",
            initialBoard: "8/8/5k2/8/5K2/8/4P3/8 w - - 0 1"
        }
    ],
    "80": [
        {
            actions: "1. c5 Kg4 \n2. b5!  dxc5 \n3. b6 cxb6 \n4. d6",
            initialBoard: "8/1pp5/p2p4/P2P4/1PP5/7k/8/7K w - - 0 1"
        },
        {
            actions: "1.  c5        dxc5\n2. bxc5    b6\n3. d6        cxd6\n3. c6",
            comment: "White wins with earlier Queen than Black.",
            initialBoard: "8/1pp5/p2p4/P2P4/1PP5/7k/8/7K w - - 0 1"
        },
        {
            actions: "1. c5        Kg4\n2. b5!        axb5\n3. c6",
            comment: "decisive when Rook Pawn is released.",
            initialBoard: "8/1pp5/p2p4/P2P4/1PP5/7k/8/7K w - - 0 1"
        }
    ],
    "81": [
        {
            actions: "1. c5!  bxc5 \n2. Kb5  Kd7 \n3. a4 Kc8 \n4. Kxa5 Kb7 \n5. Kb5  Ka7 \n6. Kc6  Kb8 \n7. a5 Kc8 \n8. a6 Kb8 \n9. a7+  Kxa7 \n10. Kxc7  Ka6 \n11. Kxd6  Kb5 \n12. b3  Kb4 \n13. Kc6",
            initialBoard: "3k4/2p5/1pKp4/p2P4/2P5/P7/1P6/8 w - - 0 1"
        },
        {
            actions: "1. c5!    dxc5\n2. d6    cxd6\n3. Kxd6    b5\n4. Kc6",
            comment: "and all Black's Pawns  will fall.",
            initialBoard: "3k4/2p5/1pKp4/p2P4/2P5/P7/1P6/8 w - - "
        },
        {
            actions: "1. c5!    bxc5\n2. Kb5    Kd7\n3. Kxa5    c6",
            comment: "Black has a  counter-play.",
            initialBoard: "3k4/2p5/1pKp4/p2P4/2P5/P7/1P6/8 w - - "
        },
        {
            actions: "1. c5!    bxc5\n2. Kb5    Kd7\n3. a4        c6+\n4. dxc6    Kc7\n5. b3",
            comment: "Black is helpless.",
            initialBoard: "3k4/2p5/1pKp4/p2P4/2P5/P7/1P6/8 w - - "
        }
    ],
    "82": [
        {
            actions: "1. a6 f1=Q \n2. a7 Qa1 \n3. f7 Qa3 \n4. d6 Qf3 \n5. d5!  Qxf7 \n6. a8=Q+ Qg8 \n7. Qa1+ Qg7+ \n8. Qxg7# ",
            initialBoard: "7k/8/5PpK/Pp1P2pp/3P4/8/5p2/8 w - - 0 1"
        },
        {
            actions: "1. a6      f1=Q\n2. a7        Kg8\n3. a8=Q+    Kf7\n4. Qb7+    Kf8\n5. Qe7+    Kg8\n6. Qe8# ",
            comment: "",
            initialBoard: "7k/8/5PpK/Pp1P2pp/3P4/8/5p2/8 w - - 0 1"
        },
        {
            actions: "1. a6      f1=Q\n2. a7        Kg8\n3. a8=Q+    Kf7\n4. Qb7+    Kxf6\n5. Qg7+    Kf5\n6. Qf7+",
            comment: "Queen falls in a  gorgeous skewer.",
            initialBoard: "7k/8/5PpK/Pp1P2pp/3P4/8/5p2/8 w - - 0 1"
        }
    ],
    "83": [
        {
            actions: "1. f5 e6 \n2. fxe6 fxe6 \n3. f4 Kb8 \n4. f5!  exf5 \n5. e6 Kc8 \n6. e7 ",
            initialBoard: "k7/2p1pp2/2P3p1/4P1P1/5P2/p7/Kp3P2/8 w - - 0 1"
        },
        {
            actions: "1. f5        gxf5\n2. e6    fxe6\n3. g6",
            comment: "does the trick to  break through for a Queen.",
            initialBoard: "k7/2p1pp2/2P3p1/4P1P1/5P2/p7/Kp3P2/8 w "
        },
        {
            actions: "1. f5        e6\n2. fxe6    fxe6\n3. f4        Kb8\n4. f5!        gxf5\n5. g6",
            comment: "White wins after first Queening.",
            initialBoard: "k7/2p1pp2/2P3p1/4P1P1/5P2/p7/Kp3P2/8 w "
        }
    ],
    "84": [
        {
            actions: "1. g3+  fxg3+ \n2. Kg2  Kh5 \n3. Kxg3 Kg5 \n4. f4+  exf4+ \n5. Kf3  Kg6 \n6. Kxf4 Kf6 \n7. e5+  dxe5+ \n8. Ke4  Kf7 \n9. Kxe5 Ke7 \n10. d6+ cxd6+ \n11. Kd5 Ke8 \n12. Kxd6 Kd8 \n13. c7+ Kc8 \n14. Ke6 Kxc7 \n15. Ke7 Kc8 \n16. Kd6 Kb7 \n17. Kd7 Kb8 \n18. Kc6 Ka7 \n19. Kc7 Ka8 \n20. Kxb6 Kb8 \n21. Ka6 Ka8 \n22. b6  Kb8 \n23. b7  Kc7 \n24. Ka7 ",
            initialBoard: "8/2p5/1pPp4/1P1Pp3/4Pp1k/5P2/5KP1/8 w - - 0 1"
        },
        {
            actions: "1. g3+    Kg5\n2. g4        Kh4\n3. Kg2    Kg5\n4. Kh3    Kh6\n5. Kh4    Kg6\n6. g5    Kg7\n7. Kh5    Kh7\n8. g6+    Kg7\n9. Kg5    Kg8\n10. Kf6    Kf8\n11. Ke6    Kg7\n12. Kd7",
            comment: "and White wins.",
            initialBoard: "8/2p5/1pPp4/1P1Pp3/4Pp1k/5P2/5KP1/8 w "
        },
        {
            actions: "1. g3+    fxg3+\n2. Kg2    Kh5\n3. Kxg3    Kg5\n4. f4+    exf4+\n5. Kf3    Kg6\n6. Kxf4    Kf6\n7. e5+    dxe5+\n8. Ke4    Kf7\n9. Kxe5    Ke7\n10. d6+    cxd6+\n11. Kd5    Ke8\n12. Kxd6    Kd8\n13. c7+     Kc8\n14. Kc6",
            comment: "allowing a draw  by stalemate.",
            initialBoard: "8/2p5/1pPp4/1P1Pp3/4Pp1k/5P2/5KP1/8 w "
        },
        {
            actions: "1. g3+    fxg3+\n2. Kg2    Kh5\n3. Kxg3    Kg5\n4. f4+    exf4+\n5. Kf3    Kg6\n6. Kxf4    Kf6\n7. e5+    dxe5+\n8. Ke4    Kf7\n9. Kxe5    Ke7\n10. d6+    cxd6+\n11. Kd5    Ke8\n12. Kxd6    Kd8\n13. c7+     Kc8\n14. Ke6    Kxc7\n15. Ke7    Kb8\n16. Kd6    Kb7\n17. Kd7    Kb8\n18. Kc6    Ka7\n19. Kc7    Ka8\n20. Kxb6    Kb8\n21. Ka6    Kc7\n22. Ka7",
            comment: "escorts the Pawn  to the eighth square.",
            initialBoard: "8/2p5/1pPp4/1P1Pp3/4Pp1k/5P2/5KP1/8 w "
        }
    ],
    "85": [
        {
            actions: "1. f6!  gxf6 \n2. Kxg2 Kg5 \n3. a4 bxa3e.p. \n4. bxa3 Kf5 \n5. a4 Ke5 \n6. d6!  cxd6 \n7. c6!  dxc6 \n8. a5 ",
            initialBoard: "8/2pp2pp/8/2PP1P2/1p5k/8/PP4p1/6K1 w - - 0 1"
        },
        {
            actions: "1. a4        Kg3!\n2. a5        h5\n3. a6        h4\n4. a7        h3\n5. a8=Q    h2#!",
            comment: "snookered by one lousy tempo. ",
            initialBoard: "8/2pp2pp/8/2PP1P2/1p5k/8/PP4p1/6K1 w - "
        },
        {
            actions: "1. Kxg2    Kg5\n2. a4    bxa3e.p.\n3. bxa3    Kf6\n4. a4        Ke7\n5. a5        Kd8\n6. a6        Kc8\n7. a7        Kb7",
            comment: "Black wins the  Pawn and the  ending.",
            initialBoard: "8/2pp2pp/8/2PP1P2/1p5k/8/PP4p1/6K1 w - "
        },
        {
            actions: "1. f6!    gxf6\n2. Kxg2     Kg5\n3. a4     bxa3e.p.\n4. bxa3     Kf5\n5. a4         Ke5\n6. a5    Kxd5",
            comment: "King catches the Queen at a8 this time!",
            initialBoard: "8/2pp2pp/8/2PP1P2/1p5k/8/PP4p1/6K1 w - "
        },
        {
            actions: "1. f6!    gxf6\n2. Kxg2     Kg5\n3. a4     bxa3e.p.\n4. bxa3     Kf5\n5. a4         Ke5\n6. c6     d6\n7. a5        Kxd5\n8. a6        Kxc6",
            comment: "King catches the freshly Queened Pawn again. ",
            initialBoard: "8/2pp2pp/8/2PP1P2/1p5k/8/PP4p1/6K1 w - "
        },
        {
            actions: "1. f6!    gxf6\n2. Kxg2     Kg5\n3. a4     bxa3e.p.\n4. bxa3     Kf5\n5. a4         Ke5\n6. d6!    c6\n7. a5        Kd5\n8. a6",
            comment: "one step ahead  White wins this time.",
            initialBoard: "8/2pp2pp/8/2PP1P2/1p5k/8/PP4p1/6K1 w - "
        }
    ],
    "86": [
        {
            actions: "1. h6 Nd6 \n2. h7 Nf7+ \n3. Ke7  Nh8 \n4. Kf6! ",
            initialBoard: "3K4/8/8/1n5P/5k2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. h6        Nd6\n2. h7        Nf7+\n3. Ke7    Ne5\n4. h8=Q    Ng6+",
            comment: "winning the Queen. ",
            initialBoard: "3K4/8/8/1n5P/5k2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. h6        Nd6\n2. h7        Nf7+\n3. Ke7    Ne5\n4. Kf6    Nd7+\n5. Kg7 ",
            comment: "Knight is kept at a distance, and wins.",
            initialBoard: "3K4/8/8/1n5P/5k2/8/8/8 w - - 0 1"
        },
        {
            actions: "1. h6        Nd6\n2. h7        Nf7+\n3. Ke7    Nh8\n4. Kf8    Ke5\n5. Kg7    Ke6\n6. Kxh8    Kf7",
            comment: "and White has  \tpainted himself into a corner with stalemate.",
            initialBoard: "3K4/8/8/1n5P/5k2/8/8/8 w - - 0 1"
        }
    ],
    "87": [
        {
            actions: "1. e6!  Ne2+ \n2. Kh2!! ",
            initialBoard: "8/8/8/4P3/2k5/6K1/8/2n5 w - - 0 1"
        },
        {
            actions: "1. e6!        Ne2+\n2. Kf3    Nd4+",
            comment: "and forked winning  of the Pawn.",
            initialBoard: "8/8/8/4P3/2k5/6K1/8/2n5 w - - 0 1"
        },
        {
            actions: "1. e6!        Ne2+\n2. Kh3    Nf4+",
            comment: "winning the Pawn, same way.",
            initialBoard: "8/8/8/4P3/2k5/6K1/8/2n5 w - - 0 1"
        },
        {
            actions: "2. Kg4    Nc3\n3. e7        Nd5\n4. e8=Q    Nf6+",
            comment: "\t1 e6!    Ne2+ winning the Queen, same way.",
            initialBoard: "8/8/8/4P3/2k5/6K1/8/2n5 w - - 0 1"
        },
        {
            actions: "1. e6!        Ne2+\n2. Kh4    Nf4\n3. e7        Ng6+",
            comment: "winning the Pawn- have we learned this lesson yet?.",
            initialBoard: "8/8/8/4P3/2k5/6K1/8/2n5 w - - 0 1"
        },
        {
            actions: "1. e6!        Ne2+\n2. Kf2    Nc3\n3. e7        Ne4+\n4. Ke3    Nd6",
            comment: "stopping the Pawn,  later capturing it  with the King.",
            initialBoard: "8/8/8/4P3/2k5/6K1/8/2n5 w - - 0 1"
        },
        {
            actions: "2. Kg2    Nf4+",
            comment: "\t1 e6!    Ne2+ winning the Pawn.  How that Knight  hops around!",
            initialBoard: "8/8/8/4P3/2k5/6K1/8/2n5 w - - 0 1"
        }
    ],
    "88": [
        {
            actions: "1. Kd5  Ne5 \n2. g3+  Kf5 \n3. g4+  Kf6 \n4. g5+  Kf5 \n5. g6 Kf6 \n6. g7 ",
            initialBoard: "8/8/1P6/8/2K2kn1/8/6P1/8 w - - 0 1"
        },
        {
            actions: "1. b7        Ne5+\n2. Kd5    Nd7\n3. Kd6    Nb8\n4. Kc7    Na6+\n5. Kb6    Nb8\n6. Ka7    Nd7",
            comment: "and Black draws.",
            initialBoard: "8/8/1P6/8/2K2kn1/8/6P1/8 w - - 0 1"
        },
        {
            actions: "1. Kd5     Ne3+\n2. Kc5",
            comment: "White will Queen.",
            initialBoard: "8/8/1P6/8/2K2kn1/8/6P1/8 w - - 0 1"
        },
        {
            actions: "1. Kd5    Nf6+\n2. Kc6",
            comment: "White Queens again.",
            initialBoard: "8/8/1P6/8/2K2kn1/8/6P1/8 w - - 0 1"
        }
    ],
    "89": [
        {
            actions: "1. g6 Nd6 \n2. g7 Ne8 \n3. g8=Q Nf6+ \n4. Kg5! Nxg8 \n5. d6!  g3 \n6. d7 g2 \n7. d8=Q+",
            initialBoard: "8/5n2/8/3P2PK/3k2p1/8/8/8 w - - 0 1"
        },
        {
            actions: "90.VAR-0",
            comment: "",
            initialBoard: "8/5n2/8/3P2PK/3k2p1/8/8/8 w - - 0 1"
        }
    ],
    "9": [
        {
            actions: "1. Kf2  Kg6 \n2. Ke3  Kf5 \n3. Kd4! Ke6 \n4. Kc5  Kd7 \n5. Kd5  Ke7 \n6. Kc6  Ke6 \n7. d4 Ke7 \n8. d5 Kd8 \n9. Kd6",
            initialBoard: "8/7k/8/8/8/3P4/8/6K1 w - - 0 1"
        },
        {
            actions: "1. Kf2    Kg6\n2.  Ke3    Kf5\n3.  Kd4!    Ke6\n4.  Kc5    Ke5\n5. d4+    Ke6\n6. d5+    Kd7\n7. d6    Kd8\n8. Kc6    Kc8\n9. d7+    Kd8",
            comment: "\tand Black draws ",
            initialBoard: "8/7k/8/8/8/3P4/8/6K1 w - - 0 1"
        },
        {
            actions: "1. Kf2    Kg6\n2.  Ke3    Kf5\n3.  Kd4!    Ke6\n4.  Kc5    Ke5\n5. d4+    Ke6\n6. Kc6    Ke7\n7. d5    Ke8\n7. Kd6",
            comment: "with familiar White  opposition and win.",
            initialBoard: "8/7k/8/8/8/3P4/8/6K1 w - - 0 1"
        },
        {
            actions: "1. Kf2    Kg6\n2.  Ke3    Kf5\n3.  Kd4!    Ke6\n4.  Kc5    Kd7\n5. Kd5 Ke7\n6. d4    Kd7",
            comment: "Black has opposition  this time and draws.",
            initialBoard: "8/7k/8/8/8/3P4/8/6K1 w - - 0 1"
        },
        {
            actions: "1. Kf2     Kg6\n2.  Ke3     Kf5\n3.  Kd4!     Ke6\n4.  Kc5     Kd7\n5. Kd5  Ke7\n6.  Kc6     Kd8\n7. Kd6",
            comment: "and White wins.",
            initialBoard: "8/7k/8/8/8/3P4/8/6K1 w - - 0 1"
        },
        {
            actions: "1. Kf2    Kg6\n2. Ke3    Kf5\n3. Kd4!    Ke6\n4. Kc5    Kd7\n5. Kd5 Ke7\n6. Kc6     Ke6\n7. d4     Ke7\n8. d5    Ke8\n9. Kc7 ",
            comment: "ends it (for Black). ",
            initialBoard: "8/7k/8/8/8/3P4/8/6K1 w - - 0 1"
        }
    ],
    "90": [
        {
            actions: "1. Kg6  Ne5+ \n2. Kf6  Ng4+ \n3. Ke6  Nxh6 \n4. b6 Nf7 \n5. Kxf7 Nc4 \n6. b7 Nd6+ \n7. Ke7  Nxb7 \n8. b4 Kg5 \n9. Kd7  Kf6 \n10. Kc7 ",
            initialBoard: "8/7K/7P/1P6/2n4k/4n3/1P6/8 w - - 0 1"
        }
    ],
    "91": [
        {
            actions: "1. a5 Bf8 \n2. Kd5  Bh6 \n3. g5+! Bxg5 \n4. Ke4! Bh4 \n5. Kf3",
            initialBoard: "8/6b1/5k2/8/P3K1P1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. a5        Bf8\n2. Kd5    Bh6\n3. g5+!    Kxg5\n4. a6        Bf8\n5. a7 ",
            comment: "too late for Bishop and Pawn will Queen.",
            initialBoard: "8/6b1/5k2/8/P3K1P1/8/8/8 w - - 0 1"
        }
    ],
    "92": [
        {
            actions: "1. Kd5! Be5 \n2. g3+  Kf5 \n3. g4+  Kf6 \n4. g5+  Kf5 \n5. g6 Kf6 \n6. g7",
            initialBoard: "8/8/1P6/8/2K2k2/8/1b4P1/8 w - - 0 1"
        },
        {
            actions: "1. b7        Be5\n2. Kd5    Bb8",
            comment: "the position draws.",
            initialBoard: "8/8/1P6/8/2K2k2/8/1b4P1/8 w - - 0 1"
        },
        {
            actions: "1. Kd5!    Be5\n2. g3+    Kf5\n3. g4+    Kf4\n4. g5    Kf5\n5. g6    Kf6\n6. g7",
            comment: "and White wins.",
            initialBoard: "8/8/1P6/8/2K2k2/8/1b4P1/8 w - - 0 1"
        },
        {
            actions: "1. Kd5!    Be5\n2. g3+    Kf5\n3. g4+    Kf6\n4. g5+    Kf5\n5. g6        Bc3\n6. b7        Be5\n7. b8=Q    Bxb8\n8. g7",
            comment: "White wins.",
            initialBoard: "8/8/1P6/8/2K2k2/8/1b4P1/8 w - - 0 1"
        }
    ],
    "93": [
        {
            actions: "1. Kf5  Bb6 \n2. Ke4  Bd8 \n3. Ke5! Bg5 \n4. h7 Bc1 \n5. Kd5  Bb2 \n6. Kc5  Kf2 \n7. Kxb5 Kf3 \n8. Kc6  Kf4 \n9. b5 Kf5 \n10. b6  Kg6 \n11. b7  Be5 \n12. b8=Q Bxb8 \n13. h8=Q ",
            initialBoard: "8/2b5/7P/1p6/1P4K1/8/8/5k2 w - - 0 1"
        },
        {
            actions: "1. Kf5    Bb6\n2. Ke5    Ke2\n3. h7    Kd3",
            comment: "Bishop reaches  d4 pulling off a stalemate.",
            initialBoard: "8/2b5/7P/1p6/1P4K1/8/8/5k2 w - - 0 1"
        },
        {
            actions: "1. Kf5    Bb6\n2. Ke4    Bd8\n3. Ke5!    Be7\n4. h7        Bxb4\n5. Kd4    Ba3\n6. Kc3",
            comment: "White controls    diagonal where   Pawn will Queen, \tand win.",
            initialBoard: "8/2b5/7P/1p6/1P4K1/8/8/5k2 w - - 0 1"
        }
    ],
    "94": [
        {
            actions: "1. Kg7  Bb3 \n2. h5 Kd7 \n3. h6 Bc2 \n4. Kf7! Bb3+ \n5. e6+  Bxe6+ \n6. Kf6  Bg8 \n7. Kg7 ",
            initialBoard: "6b1/8/2k4K/4P3/7P/8/8/8 w - - 0 1"
        },
        {
            actions: "1. Kg7    Bb3\n2. h5        Kd7\n3. h6        Bc2\n4. Kf6    Ke8",
            comment: "draws the position. ",
            initialBoard: "6b1/8/2k4K/4P3/7P/8/8/8 w - - 0 1"
        }
    ],
    "95": [
        {
            actions: "1. c5 Kg5 \n2. c6 Bd8 \n3. Ke5  Kh6 \n4. f6!  Kh7 \n5. Ke6  Kg8 \n6. Kd7  Ba5 \n7. Ke8 ",
            initialBoard: "8/8/5b2/5P2/2P1K1k1/8/8/8 w - - 0 1"
        },
        {
            actions: "1. c5        Kg5\n2. c6        Bd8\n3. Ke5    Kh6\n4. Ke6    Kg7\n5. f6+    Kf8",
            comment: "Black has a draw.",
            initialBoard: "8/8/5b2/5P2/2P1K1k1/8/8/8 w - - 0 1"
        }
    ],
    "96": [
        {
            actions: "1. a5!  Kd8 \n2. a6 Bf2 \n3. Kb7  Kd7 \n4. b5 Kd8 \n5. a7 Bxa7 \n6. Kxa7 ",
            initialBoard: "4k3/8/2K5/8/PP6/8/8/4b3 w - - 0 1"
        },
        {
            actions: "1. b5    Kd8\n2. Kb7    Kd7\n3. b6    Ba5!\n4. Ka7    Bxb6+\n5. Kxb6    Kc8\n6. Ka7    Kc7 \n7. a5    Kc8\n8. a6    Kc7",
            comment: "and Black plasters White against the  Wall for a draw.",
            initialBoard: "4k3/8/2K5/8/PP6/8/8/4b3 w - - 0 1"
        },
        {
            actions: "1. b5        Kd8\n2. Kb7    Kd7\n3. b6        Ba5!\n4. Ka7    Bxb6+\n5. Kxb6    Kc8\n6. a5        Kb8",
            comment: "and Black draws.",
            initialBoard: "4k3/8/2K5/8/PP6/8/8/4b3 w - - 0 1"
        },
        {
            actions: "1. a5!    Bxb4\n2. a6",
            comment: "the Pawn cannot  be stopped. ",
            initialBoard: "4k3/8/2K5/8/PP6/8/8/4b3 w - - 0 1"
        }
    ],
    "97": [
        {
            actions: "1. c7 Bc6+ \n2. b7!  Bxb7+ \n3. Kb8  Kb6 \n4. b5! ",
            initialBoard: "K7/8/kPP5/1b6/1P6/8/8/8 w - - 0 1"
        },
        {
            actions: "1. c7    Bc6+\n2. Kb8    Bb7\n3. b5+    Kxb5\n4. c8=Q    Bxc8\n5. Kxc8    Kxb6",
            comment: "and Black draws. ",
            initialBoard: "K7/8/kPP5/1b6/1P6/8/8/8 w - - 0 1"
        },
        {
            actions: "1. c7    Bc6+\n2. Kb8    Bb7\n3. c8=Q    Bxc8\n4. Kc7    Bb7\n5. b5+    Kxb5\n6. Kxb7",
            comment: "Black has been  swindled. ",
            initialBoard: "K7/8/kPP5/1b6/1P6/8/8/8 w - - 0 1"
        },
        {
            actions: "1. c7    Bc6+\n2. Kb8    Bb7\n3. c8=Q    Bxc8\n4. Kc7    Kb5\n5. Kxc8    Kxb6",
            comment: "the position draws.",
            initialBoard: "K7/8/kPP5/1b6/1P6/8/8/8 w - - 0 1"
        }
    ],
    "98": [
        {
            actions: "1. f5 Kg3 \n2. g5!  hxg5 \n3. h6 Bg8 \n4. f6 Kf4 \n5. h7 Bxh7 \n6. f7 ",
            initialBoard: "8/5b2/7p/7P/5PP1/8/1K4k1/8 w - - 0 1"
        },
        {
            actions: "1. f5        Kg3\n2. g5!    Bxh5\n3. gxh6",
            comment: "wins at once",
            initialBoard: "8/5b2/7p/7P/5PP1/8/1K4k1/8 w - - 0 1"
        },
        {
            actions: "1. f5        Kg3\n2. g5!    Kg4\n3. g6    Bd5\n4. f6        Kxh5\n5. f7",
            comment: "and White wins.",
            initialBoard: "8/5b2/7p/7P/5PP1/8/1K4k1/8 w - - 0 1"
        }
    ],
    "99": [
        {
            actions: "1. Kg5  Kf7 \n2. Kf5  Bd7+ \n3. Ke5  Ba4 \n4. Kd6  Bb5 \n5. Kc7  Ba4 \n6. Kd8  Bb5 \n7. g8=Q+ Kxg8 \n8. e8=Q+ Bxe8 \n9. Kxe8 ",
            initialBoard: "4b1k1/4P1P1/5P1K/8/8/8/8/8 w - - 0 1"
        },
        {
            actions: "100.VAR-1\n1. a7    Bg2",
            comment: " wrecking White's  chances of a win.",
            initialBoard: "4b1k1/4P1P1/5P1K/8/8/8/8/8 w - - 0 1"
        }
    ]
}

const texts = {
'1': `<p>PROMOTING the Pawn will win easily for White. With King and Queen against King, the process of forcing mate is elementary.</p>
<p>Can the Pawn advance at once, or will it be caught by Black? Let's try moving the Pawn and see:</p>
1 h4        Kc4<br/>
2 h5        Kd5<br/>
3 h6        Ke6<br/>
4 h7        Kf7<br/>
5 h8=Q<br/>
<p>White wins</p>
<p>We can thus play out the moves (mentally, of course) or get the answer by a simple count. The latter method tells us that after four moves the Pawn will stand at h7, and Black's pursuing King at his f7—too late to stop the Pawn from Queening</p>`,
'2': `<p>WHITE cannot win by merely advancing the Pawn. A little preparation is needed.</p>
<p>A simple count shows that the Pawn can reach a7 in four moves, but that the pursuing King, rushing back along the diagonal, will head it off at b7.</p>
<p>The play would be: 1 a4, Ke4 2 a5, Kd5 3 a6, Kc6 4 a7, Kb7 and the Pawn is lost. White must try other means:</p>
        1 Kf5!<br/>
<p>This prevents Black from moving along the diagonal to stop the Pawn, and threatens to win by 2 a4, 3 a5, etc. </p>
      1 . . .        Ke3<br/>
<p>Black seizes a new diagonal and is ready for this continuation: 2 a4, Kd4 3 a5, Kc5 4 a6 Kb6, and he wins the Pawn.</p>
        2 Ke5!<br/>
<p>Interferes with that little idea, and once again threatens to win by pushing the Pawn.</p>
      2 . . .         Kd3<br/>
<p>Now if  3 a4,  Kc4 4 a5, Kb5 and Black draws.</p>
        3 Kd5!<br/>
<p>Cuts Black off a third time from pursuing the Pawn.</p>
        3 . . .        Kc3<br/>
<p>This gives White a last chance to start the Pawn prematurely.  If now    4 a4, Kb4 nails the Pawn down.  </p>
        4 Kc5!<br/>
<p>This is decisive! Black's King is shut out completely.  The continuation (regardless of anything Black does, consider for example Black’s move   4 . . . Kd3) will be:</p>
    5 a4    Kc3<br/>
    6 a5    Kb3<br/>
    7 a6    Ka4<br/>
    8 a7    Ka5<br/>
    9 a8=Q#<br/>
<p>Or any other Black moves also result in White’s ultimate victory.</p>`,
'3': `<p>THE key to the win:</p>
<p>Move the King, not the Pawn!</p>
<p>The King must clear a way for the Pawn to come through. He does this by taking the opposition: he moves to a face to face position with Black's King, and forces Black to give way.  White can then seize control of e8, the square on which the Pawn promotes to a Queen.</p>
<p>     Without this preparation, advancing the Pawn does not work. For instance: 1 e6, Kd8 2 Kd7+, Kd8 3Kd6, (to protect the Pawn) and Black draws by stalemate.</p>
<p>     The proper technique:</p>
1 Ke6!<br/>
<p>     The Kings face each other, and White having the opposition, forces Black to give way. The King that can compel the other to yield ground either by retreating or stepping aside, is said to have the opposition.</p>
<p>     This is now for White the ideal position in King and Pawn endings. He wins no matter whose move it is</p>
1 . . .    Kd8<br/>
<p>Or   1 .. . . Kf8 2 Kd7, Kg7 3 d6+, Kf8  4 e7+, and wins.</p>
2 Kf7<br/>
<p>From this square, the King not only controls e8 (the square on which the Pawn becomes a Queen) but is also in position to escort the Pawn on its way up.</p>
    2 . . .         Kd7<br/>
    3 e6+        Kd8<br/>
    4 e7+        Kd7<br/>
    5 e8=Q+<br/>
<p>White wins</p>`,
'4': `<p>WHITE wins this ending by getting the opposition, and maintaining it.</p>
1 Kf5<br/>
<p>Strong, but obviously forced, as his Pawn was in danger.</p>
<p>The Kings face each other with one square between them. White has the opposition, since his opponent must give ground by retreating or stepping to one side.</p>
1 . . .        Kf8<br/>
2 Kf6!<br/>
<p>Best, since it maintains the opposition. White must resist the temptation to move closer to the Pawn. This would be the consequence: 2 Ke6, Ke8 3 d7+, Kd8 4 Kd6, and Black draws by stalemate. Note in this and similar positions that the Pawn must reach the seventh rank without checking in order to win.</p>
2 . . .    Ke8<br/>
3 Ke6    Kd8<br/>
4 d7    Kc7<br/>
5 Ke7<br/>
<p>White wins</p>`,
'5': `<p>ANOTHER song to the same tune. White uses the force of the opposition to help his Pawn reach the Queening square.</p>
1 Kd5    Kd7<br/>
2 Kc5<br/>
<p>If Black could meet this by 2 . . . Kc7, he would have the opposition. This being impossible, he sets a little trap.</p>
2 . . .    Kd8<br/>
<p>He hopes that White will play the obvious 3 Kc6 (moving closer to the Pawn) whereupon    3... Kc8 4  b7+, Kb8  5 Kb3 draws.</p>
3  Kd6!<br/>
<p>This gives White the opposition and assures the win, since the Pawn will now reach the seventh rank without checking.</p>`,
'6': `<p>WHITE wins this ending by using his King aggressively. The King heads for c6, an ideal King and Pawn position, since it wins with or without the move.</p>
1 Kg6!<br/>
<p>The only move to win. Moving    1 c5 instead allows 1. . . Kf7 2 Kg5, Ke6 and Black will win the Pawn.</p>
<p>After the actual move, White has the opposition and by maintaining it makes the winning process child's play.</p>
    1 . . .        Kf8<br/>
    2 Kf6        Ke8<br/>
    3 Ke6        Kd8<br/>
    4 Kd6<br/>
<p>Black never gets a chance to approach the Pawn.  </p>
    4 . . .        Kc8 <br/>
    5 Kc6<br/>
<p>An endgame position worth remembering, since White wins no matter whose turn it is to move.</p>
    5 . . .        Kb8<br/>
<p>If instead 5 ... Kd8 6 Kb7, (seizing control of the Pawn's Queening square) Ke7 7 c5, and the Pawn cannot be stopped. </p>
    6 Kd7        Kb7<br/>
    7 c5        Kb8<br/>
    8 c6        Ka7<br/>
    9 c7<br/>
<p>White wins</p>`,
'7': `<p>WHITE plays to get his King in front of the Pawn. The position is then a win, no matter whose move it is.</p>
1 Kf7!<br/>
<p>There is no win after 1 g6+, Kh8   2 g7+, (2 Kf7 stalemates Black) Kg8 3 Kg6, and Black is stalemated. Notice that the Pawn check at the seventh rank does not win unless White controls the Queening square.</p>
1 . . .     Kh8<br/>
2 Kg6!    Kg8<br/>
3 Kh6    Kh8<br/>
4 g6    Kg8<br/>
5 g7<br/>
<p>The winning idea. The Pawn reaches the seventh rank without checking.</p>
5 . . .    Kf7<br/>
6 Kh7<br/>
<p>Seizes control of g8, the Pawn's Queening square.</p>
6 . . .     Ke7<br/>
7 g8=Q<br/>
<p>White wins</p>`,
'8': `<p>WHITE plays to get the opposition. This will place his King in a dominating position, force Black to retreat, and clear a way for the Pawn to come through.</p>
    1 Ke4    Ke6<br/>
<p>White's position is ideal. His King is in front of the Pawn with one square between them. In cases such as this, where he does not have the opposition, he can wrest it from Black by gaining a tempo with a Pawn move.</p>
2 e3!<br/>
<p>Shows the value of having a square between King and Pawn. The spare move leaves the position of the Kings unchanged—but it is Black's move and he must give way!</p>
    2 . . .        Kd6<br/>
    3 Kf5        Ke7<br/>
<p>If instead 3 . . . Kd5, the procedure is 4 e4+, Kd6 5 Kf6!, Ke7 6 e5, Ke8 7 Ke6, and White wins.</p>
4 Ke5<br/>
<p>seizes the opposition. Black must retreat or step aside.</p>
4 . . .         Kd7<br/>
5 Kf6             Ke8<br/>
<p>Or 5 . . . Kd6 6 e4, Kd7 7 e5, Kd8 (7 . . . Ke8 8 Ke6) 8 Kf7 and White wins.</p>
6 Ke6<br/>
<p>The simplest, as White has a forced win no matter whose move it is, and no matter whether his Pawn stands on e2, e3, e4 or e5.</p>
6 . . .        Kf8<br/>
7 e4        Ke8<br/>
8 e5         Kf8<br/>
9 Kd7        Kf7<br/>
10 e6+        Kf8<br/>
11 e7+<br/>
<p>White wins</p>`,
'9': `<p>TO CLEAR a path for the Pawn, White must maneuver his King to a dominating position in front of the Pawn. He does so interestingly enough by having the King take a walk along the diagonal!</p>
1 Kf2        Kg6<br/>
2  Ke3        Kf5<br/>
3  Kd4!        Ke6<br/>
4  Kf5        Kd7<br/>
<p>If instead 4 . . . Ke5 5 d4+, Ke6 6 Kf6, (but not 6 d5+, Kd7 7 d6, Kd8 8 Kf6, Kf8 9 d7+, Kd8 and Black draws) Ke7 7 d5, Kd8 8 Kd6 and we have a familiar win.</p>
5 Kd5     Ke7<br/>
<p>White could now ruin things by 6 d4, Kd7, and Black has the opposition and draws.</p>
6  Kc6         Ke6<br/>
<p>Or 6 . . . Kd8 7 Kd6 and White wins.</p>
7 d4         Ke7<br/>
8  d5        Kd8<br/>
<p>On 8 . . . Ke8 9 Kc7 ends it.</p>
9 Kd6<br/>
<p>White wins</p>`,
'10': `<p>WITHOUT the aid of the King, who makes a little trip, White's Pawn could never get to the Queening square.</p>
1 Kb3<br/>
<p>If instead 1 g4 (starting out unescorted) Kc5 2 g5, Kd5 3 g6, Ke6, and the Pawn is lost.(i.e. 4 g7, Kf7 5 g8=Q,  Kxg8!)</p>
1 . . .              Kc5<br/>
2 Kc3<br/>
<p>Here too, and for the next few moves, advancing the Pawn permits Black to capture it and draw.</p>
2 . . .             Kd5<br/>
3 Kd3                  Ke5<br/>
4 Ke3                        Kf5<br/>
5 Kf3                     Kg5<br/>
6 Kg3<br/>
<p>Sometimes the way to ensure the Pawn's progress is to get right in its way!</p>
6  . . .     Kf5<br/>
7 Kh4      Kf6<br/>
8 Kh5    Kg7<br/>
<p>Or 8 . . . Kf5 9 g4+, Kf6 10 Kh6, Kf7 11 g5, Kg8 (11 . . . Kf8 12 Kh7) 12 Kg6 and White wins.</p>
9 Kg5            Kf7<br/>
10 Kh6               Kg8<br/>
<p>If 10 . . . Kf6 11 g4, Kf7 12 g5 as in the previous note.</p>
11 Kg6 <br/>
<p>White wins</p>`,
'11': `<p>IN ORDER to win (and this applies to all endings where the passed Pawn is on the Rook file) White must prevent Black's King from getting in front of the Pawn, since that always ends in a draw. He must also (this may seem strange!) guard against having his own King boxed in!</p>
<p>These are the drawing possibilities:</p>
<p>A] 1 Kb6, Kc8 2 a4, Kb8 3 a5, Ka8 4 a6, Kb8 5 a7+, (nothing else is any better) Ka8 6 Ka6 and Black is stalemated.</p>
<p>B] 1 Kb6, Kc8 2 Ka7, (to prevent 2... Kb8) Kc7 3 a4, Kc8 4 a5, Kc7 5 a6, Kc8 6 Ka8, Kc7 7 a7, Kc8, and White is stalemated.</p>
<p>The way to win is to use the King aggressively—keep Black out of c8 (and any drawing chances) completely.</p>
1 Kb7!<br/>
<p>After this move, Black has no play at all.</p>
1     . . .    Kd7<br/>
2 a4        Kd6<br/>
3 a5        Kc5<br/>
4 a6<br/>
<p>White wins. The Pawn marches gaily up to become a Queen.</p>`,
'12': `<p>THIS looks like an easy win, since the connected Pawns are never in danger.  If the rear Pawn is captured, the other one advances.  . However there remains the danger of stalemating Black.</p>
<p>White solves the problem by remembering that one Pawn ahead is enough to win.</p>
1  Kf 4        Kg7<br/>
2  Kf5        Kh8<br/>
3 Kg5<br/>
<p>If White tries 3 Ke6, then after      3 . . . Kg7  4 Kd7, Kh8, his King must not come any closer.</p>
3 . . .             Kg7<br/>
4  h8=Q+!            Kxh8<br/>
5  Kf 6            Kg8<br/>
6  g7            Kh7<br/>
7 Kf7<br/>
<p>White wins</p>`,
'13': `<p>DOUBLED Pawns are often an ad-vantage in the endgame if only for the fact that one of the Pawns may give up his life for the other!</p>
1 g7    Kh7<br/>
<p>Careful, now! If White moves 2 Kf7 he allows a draw by stalemate, while 2 g6+, Kg8 lets the win slip forever.</p>
2 g8=Q+!    Kxg8<br/>
3 Kg6<br/>
<p>To get the opposition.</p>
3 . . .    Kh8<br/>
<p>Or 3 . . . Kf8 4 Kh7 and White wins.</p>
4 Kf7    Kh7<br/>
5 g6+    Kh8<br/>
6 g7+<br/>
<p>White wins</p>`,
'14': `<p>THE isolated Pawns look weak and helpless. They are perfectly safe. An attack on either Pawn is parried by advancing the other!</p>
1 a4!<br/>
<p>Now if Black plays 1 . . . Kxc3 the reply is 2 a5, and the Pawn cannot be overtaken.</p>
1 ...    Kc5<br/>
2 Kg3<br/>
<p>But not 2 c4, Kxc4 nor 2 a5, Kb5. It is important not to advance the Pawns prematurely.</p>
2 . . .    Kb6<br/>
<p>Here too against 2 . . . Kc4, the Pawns stay put while the King moves closer by 3 Kf3.</p>
3 c4    Ka5<br/>
<p>The reply to 3 . . . Kc5 would be 4 a5.</p>
4 c5    Ka6<br/>
5 Kf3    Kb7<br/>
6 a5    Kc6<br/>
7 a6    Kc7<br/>
8 Ke4    Kc6<br/>
9 Ke5    Kc7<br/>
10 Kd5    Kb8<br/>
11 c6    Kc7<br/>
<p>If 11 . . . Ka7 12 c7 wins.</p>
12 a7<br/>
<p>White wins</p>`,
'15': `<p>THERE is a lesson in this ending for those who "take first and think it over later."</p>
1 Kf4        Kh7<br/>
<p>If instead 1 . . . g5+ 2 Kf5, g4 3 Ke6, g3 4 f7, Kg7 (on 4 . . . g2, White Queens with check) 5 Ke7 and White wins.</p>
2 Kg5        Kh8<br/>
3 Kh6!<br/>
<p>Taking the opposition wins; taking the Pawn does not.</p>
3 . . .        Kg8<br/>
<p>Or 3 . . . g5 4 f7 followed by     5 f8=Q#.</p>
4 Kxg6        Kh8<br/>
5 Kf7        Kh7<br/>
6 Ke8<br/>
<p>White wins</p>`,
'16': `1 Kb1!<br/>
<p>A CURIOUS way to go after the Pawn! The obvious move 1 Kc3 lets Black escape. For example 1 Kc3, a3! 2 b4 (or 2 bxa3, Ke6, and Black scurrying over to a8 draws easily against a Pawn on the Rook file) Ke5 3 Kb3, Kd5 4 Kxa3, Kc6 5 Ka4, Kb6  6 b5, Kb7 7 Ka5, Ka7 8 b6+, Kb7 9 Kb5, Kb8 10 Kc6, Kc8, and White cannot avoid the draw.</p>
<p>. . . .     a3</p>
<p>On 1 . . . Ke5 2 Ka2, Kd5 3 Ka3, Kc5 4 Kxa4, Kb6 5 Kb4, and White having the opposition wins.</p>
2   b3!        Ke5<br/>
3   Ka2        Kd5<br/>
4   Kxa3        Kc6<br/>
5 Ka4!<br/>
<p>Certainly not 5 Kb4, Kb6, and all White's earlier strategy has been wasted since Black has the opposition and draws.</p>
5 . . .         Kb6<br/>
6 Kb4<br/>
<p>White wins</p>`,
'17': `<p>BLACK is double-crossed by his own Pawn! Without the Pawn on the board, Black's King simply heads for the magic square a8, after which no power on earth can force a win.</p>
1 a4    Ke4<br/>
2 a5    Kd5<br/>
3 a6    Kd6<br/>
<p>Black's own Pawn stands in his way. His King is unable to move to the vital square c6.</p>
4 a7    Kc7<br/>
<p>Too late.</p>
5 a8=Q<br/>
<p>White wins</p>`,
'18': `<p>A STRAIGHT line is not the shortest distance between two points.</p>
<p>If White moves across the board to capture the Pawn, he wins the Pawn but not the game.</p>
<p>This is what would happen: 1 Ke7, Kc3 2 Kd7, Kd4 3 Kc7, Kc5 4 Kb7, Kd6 5 Kxa7, Kc7 6 Ka8, Kc8, and Black gets a draw.</p>
<p>Suppose he meanders down the board and then up again?</p>
1 Ke6        Kc3<br/>
2 Kd5!<br/>
<p>This is the point. Black is kept out of his d4 square.</p>
2 . . .        Kb4<br/>
3 Kc6        Kc4<br/>
4 Kb7        Kb5<br/>
5 Kxa7        Kc6<br/>
6 Kb8<br/>
<p>White wins</p>`,
'19': `<p>WHITE'S King must take a devious route to help his Pawn become a Queen.</p>
1 b5    Ke5<br/>
<p>There is no hope in 1. . . h4 2 b6, h3 3 b7, h2 4 b8=Q+.</p>
2 b6!<br/>
<p>If 2 Kc5 (trying to exclude Black's King) Ke6 3 Kc6 (3 b6, Kd7 is a draw) h4 4 b6, h3 5 b7, h2 6 b8=Q, h1=Q and the position is a draw.</p>
2 . . .        Kd6<br/>
3 Kb5    h4<br/>
<p>If 3. . .Kd7 4 Ka6, Kc8   5 Ka7 wins.</p>
4 Ka6<br/>
<p>Of course not 4 b7, Kc7 5 Ka6, Kb8 and White loses.</p>
4 . . .        h3<br/>
5 b7        Kc7<br/>
6 Ka7        h2<br/>
7 b8=Q+<br/>
<p>White wins</p>`,
'20': `<p>THE race to Queen a Pawn is also a race to see who can check first, and perhaps win the other Queen.</p>
    1 e6    Kf6<br/>
<p>Black loses quickly after 1 . . . g3 2 e7, g2 3 e8=Q, g1=Q 4 Qg8+, and his Queen comes off the board.</p>
    2 Kd6        g3<br/>
    3 e7        g2<br/>
<p>If 3 . . . Kf7 4 Kd7, and the threat of Queening with check wins for White.</p>
4 e8=Q        g1=Q<br/>
5 Qf8+        Kg5<br/>
6 Qg8+<br/>
<p>White wins the Queen and the game</p>`,
'21': `<p>WHITE'S timing has to be precise in order to Queen his Pawn with a check.</p>
1 Kg5    b5<br/>
2 Kf4<br/>
<p>To stop Black's Pawn. The alterna-tive 2 h5, b4 leads to both Pawns Queening—and a draw.</p>
2 . . .    Ke2<br/>
<p>Naturally, if 2 . . . b4 3 Ke4 will catch the Pawn.</p>
3 Ke4    Kd2<br/>
<p>Here too 3 . . . b4 loses the Pawn.</p>
4 Kd4    Kc2<br/>
<p>Now if White play 5 h5, Black draws by 5 . . . b4 6 h6, b3 7 h7, b2 8 h8=Q, b1=Q.</p>
5 Kc5    Kc3<br/>
<p>Ready to meet 6 Kxb5 with 6 . . . Kd4  7 h5, Ke5, winning White's Pawn and draw in return. </p>
6 h5                b4<br/>
7 h6                b3<br/>
8 h7                b2<br/>
9 h8Q+    Kc2<br/>
10 Qh2+    Kc1<br/>
11 Qf4+    Kc2<br/>
12 Qc4+    Kd2<br/>
13 Qb3    Kc1<br/>
14 Qc3+    Kb1<br/>
15 Kc4    Ka2<br/>
16 Qa5+    Kb1<br/>
17 Kb3    Kc1<br/>
18 Qe1#<br/>`,
'22': `<p>WHERE both sides Queen their Pawns, the one who first gives check has an advantage that is often de-cisive.</p>
1 f7        h2<br/>
2 f8=Q        h1=Q<br/>
3 Qf3+        Kg1<br/>
<p>Forced, as 3. . . Kh2 allows 4 Qg3#.</p>
4 Qe3+        Kf1<br/>
5 Qc1+        Kg2<br/>
6 Qd2+        Kf1<br/>
7 Qd1+        Kg2<br/>
8 Qe2+        Kg1<br/>
9 Kg3!<br/>
<p>White wins. Black is curiously helpless to prevent mate.</p>`,
'23': `1 Kc3<br/>
<p>THE straightforward 1 g4 leads </p>
<p>to 1 . . . b5 2 g5, b4  3 g6, b3+  4 Kc3, b2 5 g7, b1=Q 6 g8=Q+, Ka1, and a draw.</p>
1 . . .        Ka3<br/>
<p>To escort the Pawn through. If instead 1 . . . b5 2 Kb4, Kb2 3 g4 wins easily.</p>
2 Kc4        Ka4<br/>
3 g4        b5+<br/>
4 Kd3!        Ka3<br/>
<p>The King must lose a move as 4 . . . b4  5 Kc2, Ka3  6 Kb1 is hopeless.</p>
5 g5        b4<br/>
6 g6        b3<br/>
7 g7        b2<br/>
8 Kc2!<br/>
<p>Forcing Black into line for a check.</p>
8 . . .        Ka2<br/>
9 g8=Q+        Ka1<br/>
<p>Or 9 . . . Ka3 10 Qb3#.</p>
10 Qa8#<br/>`,
'24': `1 Kc5!<br/>
<p>THE star move to help his own Pawn while making it difficult for Black's to advance.</p>
1 . . .    g5<br/>
<p>If  1 . . .  Kg6 (to cope with White's Pawn) 2 b4, Kf7  3 b5, Ke7 4 Kc6, Kd8  5 Kb7, g5  6 b6, g4  7 Ka7, g3 8 b7, g2  9 b8=Q+ wins for White.</p>
2 b4    g4<br/>
3 Kd4    g3<br/>
4 Ke3    Kg5<br/>
<p>To rescue his Pawn, as chasing after White's is useless.</p>
5 b5<br/>
<p>But not 5 Kf3 (to which Black would not meekly oblige with 5. . . Kh4 6 Kg2 and it's all over) Kf5 6 Kxg3 Ke4 and Black captures the Pawn and draws.</p>
5 . . .    Kg4<br/>
6 b6    Kh3<br/>
<p>If 6 . . . g2 7 Kf2, Kh3 8 Kg1 wins.</p>
7 b7            g2<br/>
8 Kf2        Kh2<br/>
9 b8=Q+<br/>
<p>White mates next move with Qg3#.</p>`,
'25': `<p>THE natural move does not always win, even in the most innocent-looking position.</p>
<p>Two ideas suggest themselves to White: capturing Black's Pawn or advancing his own. Neither of them works!</p>
<p>If 1 Kxb7, Kb3 2 Kc6 (2 f4, Kc4 3 f5, Kd5 loses the Pawn) Kc4 3 Kd6, Kd4 4 f4, Ke4 and Black wins the Pawn.</p>
<p>If 1 f4, b5 2 f5, b4, and both sides Queen with a drawn result.</p>
1 Kd6!        Ka3<br/>
<p>Or 1 . . . b5 2 Kc5, Kb3 3 Kxb5, Kc3 4 Kc5, Kd3 5 Kd5, and the Pawn is safe.</p>
2 Kc5        Ka4<br/>
3 f4        b5<br/>
4 f5        b4<br/>
5 Kc4!<br/>
<p>Necessary, as 5 f6, b3 6 f7, b2 7 f8=Q, b1=Q 8 Qa8+, Kb3 9 Qb7+, Kc2 is only a draw.</p>
5 . . .        b3<br/>
6 Kc3!        Ka3<br/>
7 f6        b2<br/>
8 f7        b1=Q<br/>
9 f8=Q+    Ka4<br/>
<p>If 9. . . Ka2 10 Qa8#.</p>
10 Qa8+        Kb5<br/>
11 Qb7+<br/>
<p>White wins the Queen and the game</p>`,
'26': `1 Kf5!<br/>
<p>STARTING the Pawn instead would be premature: C</p>
1 . . .         Ke3<br/>
<p>If 1. . .    c5 2 Ke5, Ke3 3 Kd5, Kd3 4 Kxc5 wins              for White.</p>
2 Ke5        c6<br/>
<p>Playing for 3 Kd6, Kd4 4 Kxc6, Kc4 and Black draws. There was no chance in 2 . . . Kd3 3 Kd5, c6+ 4 Kc5, Kc3 5 a4, and White wins.</p>
3 a4    Kd3<br/>
4 a5<br/>
<p>Here too, attacking the Pawn by 4 Kd6 allows 4 . . . Kc4 and Black saves himself.</p>
4 . . .         c5<br/>
5 a6        c4<br/>
6 a7        c3<br/>
7 a8=Q        c2<br/>
<p>White must play carefully now. For example if 8 Qe4+, Kd2 9 Qd4+, Ke2 10 Qc3, Kd1  11 Qd3+, Kc1 12 Kd4, Kb2 13 Qe2  (with the last hope of a win by 13 . . . Kb1 14 Kc3, c1=Q+ 15 Kb3, and Black will be mated) Ka1! 14 Qxc2 (nothing else is any better) and Black is stalemated.</p>
8 Qd5+!    Ke2<br/>
<p>If Black tries 8 . . . Kc3 the following occurs: 9 Qd4+, Kb3 10 Qa1, Kc4 11 Ke4, and the Pawn falls.</p>
<p>Or if 8 . . . Ke3 9 Qg2, Kd3 (9 . . . c1=Q 10 Qg5+ winning the Queen) 10 Qg5, Kc3 followed by 11 Qc1 is decisive.</p>
9 Qa2!        Kd1<br/>
 10 Kd4        c1=Q<br/>
 11 Kd3<br/>
<p>White mates or wins the Queen.</p>`,
'27': `<p>THE obvious attack on Black's Pawns would lead to the following: 1 Kf7, g5 2 Kg7, Kb3 3 Kxh7, Kc4 4 Kg6, g4 5 Kf5, Kd5 6 Kxg4, Ke6 7 Kg5, Kf7 and Black’s King reaches h8 with an automatic draw against the Rook Pawn.</p>
1 h4!    h5<br/>
<p>If  1. . . h6 2 h5, Kb3   3 Kf7 wins at once, or if 1 . . . Kb3 2 Kf7, Kc4 3 Kxg7, h5 4 Kg6, Kd5 5 Kxh5, Ke6 6 Kg6, Ke7 7 Kg7 keeps the Black King at arm's length and wins.</p>
<p>Now comes the point of the position. The natural continuation 2 Kf7 allows 2 . . . g5 3 hxg5, h4    4 g6, h3 and both sides Queen with a drawn result</p>
2 Kf8!<br/>
<p>This move keeps g8 open so that after 2 . . . g5 3 hxg5 White's Pawn will Queen with check.</p>
2 . . .    g6<br/>
3 Ke7!<br/>
<p>Here too if 3 Kf7 or 3 Kg7, the reply 3 . . . g5 4 hxg5, h4 leads to a draw. The move actually made keeps the square g8 open for White's Pawn to Queen with check.</p>
3 . . .    g5<br/>
<p>Or 3 . . . Kb3 4 Kf6 and White captures both Pawns and wins.</p>
4 hxg5    h4<br/>
5 g6    h3<br/>
6 g7    h2<br/>
7 g8=Q+    Ka3<br/>
8 Qg2<br/>
<p>White wins</p>`,
'28': `1 Kf5<br/>
<p>WHITE abandons his passed Pawn. Capturing it will keep Black busy on one side of the board, while White gets time to win on the other.</p>
1 . . .           Kh6<br/>
<p>The Pawn must be removed. If Black tries to defend the Knight Pawn, then after 1 . . . Kf7 2 Ke5, Ke7 3 Kd5, Kd7 4 h6 makes him regret it.</p>
2 Ke5                Kxh5<br/>
3 Kd5                   Kg6<br/>
4 Kc6                  Kf6<br/>
5 Kxb6              Ke7<br/>
6 Kc7<br/>
<p>        White wins</p>
<p>Another way to win is this:</p>
1 h6+                  Kh7<br/>
2 Kh5        Kh8<br/>
3 Kg6        Kg8<br/>
4 h7+        Kh8<br/>
5 Kh6        b5<br/>
6 a5        b4<br/>
7 a6        b3<br/>
8 a7        b2<br/>
9 a8=Q#<br/>`,
'29': `<p>TRYING to win by promoting the Bishop Pawn does not work. For example, if 1 f5, Kf7 2 Ke5, Ke7 3 f6+, Kf7 4 Kf5, Kf8 5 Ke6. Ke8 6 f7+, Kf8 7 Kd6 (too late, but the alternative 7 Kf6 draws by stalemate) Kxf7 8 Kc6, Ke7 9 Kb6, Kd7 10 Kxa5, Kc7 11 Kb5, (or Ka6,) Kb8 , and Black draws against the Rook Pawn.</p>
<p>The way to win is to abandon the Bishop Pawn, keep Black occupied in capturing it, and win on the other side of the board.</p>
1 Kd5        Kf5<br/>
2 Kc5        Kxf4<br/>
3 Kb5        Ke5<br/>
4 Kxa5        Kd6<br/>
5Kb6         Kd7 <br/>
6 Kb7<br/>
<p>Shuts the King out, after which the Pawn has clear sailing.</p>
6 . . .        Kd8<br/>
7 a5<br/>
<p>White wins</p>`,
'30': `<p>TO WIN this, the King forces his way in behind Black's Pawn and attacks from the rear.</p>
1 Kd5!<br/>
<p>Of course not 1 Kf5, Kd6 2 Kf6, Kc5 3 Ke6, Kxb5 4 Kd5, Kb6 and White loses both Pawns!</p>
1 . . .          Kd8<br/>
<p>Black must stay near his Pawn.   If he makes some such move as  1. . .  Kf7 2 b6 wins instantly.</p>
2 Ke6                Kc8<br/>
<p>If 2 . . . Ke8 3 b6, cxb6 (or     3 . . . Kd8 4 b7 and mate next move) 4 c7 wins.</p>
3 Ke7    Kb8<br/>
4 Kd8    Ka7<br/>
5 Kxe7    Ka8<br/>
6Kd8<br/>
<p>White wins</p>`,
'31': `1 Kc5    Kb8<br/>
<p>BLACK has two other replies we should look at:</p>
<p>If 1 . . . . b6+ 2 Kc6 (not 2 axc6+, Kb7 and Black draws) bxa5 3 Kc7, a4 4 b6+, Ka6 5 b7, a3 6 b8=Q and White wins.</p>
<p>If 1 . . . Ka8 2 Kb6, Kb8 3 a6, bxa6    (or    3 . . . Ka8 4 axb7+, Kb8 5 Ka6, Kc7 6 Ka7) 4 Kxa6!, Ka8 5 b6, and wins.</p>
2 Kb6        Ka8<br/>
3 Kc7        Ka7<br/>
4 a6<br/>
<p>One advantage in being a Pawn ahead is that you may sacrifice one Pawn for the sake of the other.</p>
4 . . .            bxa6<br/>
5 b6+            Ka8<br/>
6 b7+            Ka7<br/>
7 b8=Q#<br/>`,
'32': ``,
'33': `<p>THE key to the win is for White to give up his passed Pawn, force his way to d6, capture Black's Pawn and then promote the remaining Pawn.</p>
1 Kf6     Kd8!<br/>
<p>On 1 . . . Ke8 2 Ke6, Kd8 3 d7, Kc7 4 Ke7 wins.</p>
2 d7!    Kxd7<br/>
3 Kf7!<br/>
<p>White now has the opposition, and will regain the Pawn he sacrificed.</p>
3 . . .             Kd8<br/>
4 Ke6           Kc7<br/>
5 Ke7           Kc8<br/>
6 Kd6           Kb7<br/>
7 Kd7           Kb8<br/>
8 Kxc6         Kc8<br/>
9 Kd6           Kd8<br/>
10 c6              Kc8<br/>
11 c7<br/>`,
'34': `<p>AN EXCHANGE of Pawns, after suitable preparation, wins for White. The preparation consists in getting his King behind Black's Pawn, into a dominating position.</p>
1 Kd7<br/>
<p>The immediate exchange is premature, as after 1 d5, cxe5 2 Kxe5, Kb6 3 Kc4, Kc6 4 b5+, Kb6, the position is a familiar draw.</p>
1 . . .    Kb6<br/>
2 Kc 8    Ka6<br/>
3 Kc7    Kb5<br/>
4 Kb7    Kxb4<br/>
5 Kxc6             Kc4<br/>
6 d5<br/>
<p>White wins</p>`,
'35': `<p>THE method here is to crowd Black into a corner, sacrifice one Pawn and break through with the other.</p>
1 Kd6    Kd8<br/>
2 Ke6    Kc8<br/>
<p>The alternative loses at once: 2 . . . Ke8 3 c6, Kd8 (or 3 . . . bxc6 4 b7) 4 cxb7, Ke8 5 b8=Q#.</p>
3 Ke7    Kb8<br/>
4 Kd7    Ka8<br/>
5 c6<br/>
<p>Clearly, not 5 Kc7 stalemating Black.</p>
5 . . .            bxc6 <br/>
6 Kc7            c5<br/>
7 b7+             Ka7<br/>
8 b8=Q+            Ka6<br/>
9 Qb6#<br/>`,
'36': `1 Kd7!<br/>
<p>A STRANGE-LOOKING move! From this square though, the King has two wins prepared, depending on which of two possible first moves Black selects.</p>
1 . . .         Kb7<br/>
<p>Against the alternative 1 . . . Ka7 White seizes the opposition, gets behind the Pawn and wins this way: 2 Kc7, Ka6 3 Kb8, Ka5 4 Kb7, Kxa4 5 Kxb6 followed by 6 c5, and all over for Black!</p>
2 a5!    bxa5<br/>
<p>If 2 . . . Ka6 instead, then 3 axb6, Kxa5 4 Kd6, Kb7 5 c5, Kc8 6 Kc6 and we have a familiar winning position.</p>
3 c5                    a4<br/>
4 c6+                       Kb6<br/>
5 c7                   a3<br/>
6 c8=Q                     a2<br/>
7 Qa8<br/>
<p>White wins</p>`,
'37': `<p>IT IS obvious that giving up the Queen Pawn will clear the way for the Knight Pawn to come through, but the sacrifice must be prepared properly. The King must assume a most aggressive position—behind Black's Pawn in fact!</p>
1 Kb7<br/>
<p>If at once 1 d6, Kc8 2 d7+ (or 2 b6, cxb6 3 Kxb6, Kd7 drawing easily) Kd8 3 Kb7, Kxd7 4 Kb8, Kd6 and Black draws.</p>
1 . . .              Kd7<br/>
2 Kb8                  Kd8<br/>
<p>Or 2. . . Kd6 3 Kc8, Kxd5 4 Kxc7. </p>
3 d6!        cxd6<br/>
4 b6        d5<br/>
5 Ka7        d4<br/>
6 b7        d3<br/>
7 b8=Q+        Kd7<br/>
8 Qb5+ <br/>
<p>White wins Black’s Pawn</p>
<p>and the game.</p>`,
'38': `<p>WHITE can win easily by going after Black's miserable Pawn thus: 1 Kf5, Kf7 (1 . . . Kf8 2 Kg6) 2 Kg5, Kb8 3 Kxh5 etc.</p>
<p>Or, he can indulge in a bit of refined cruelty by allowing Black to get a Queen before being mated.</p>
1 f7+        Kf8<br/>
2 Kf6        h4<br/>
3 g4        h3<br/>
4 g5        h2<br/>
5 g6        h1=Q<br/>
6 g7#<br/>`,
'39': `<p>SHOULD White begin with 1 g3 or 1 g4? The Pawn must reach g7 without giving check, that is to say when the opposing King stands at his g8 square.</p>
<p>The right move is then . . .</p>
 1 g3!<br/>
<p>The aggressive 1 g4 leads to 1 . . . Kh8 2 g5, Kg8 3 g6, hxg6 4 hxg6 (if 4 Kxg6, Kh8, and Black draws automatically against the Rook Pawn) Kh8 5 g7+ and a draw.</p>
1 . . .    Kh8<br/>
2 g4            Kg8<br/>
3 g5    Kh8<br/>
4 g6    hxg6<br/>
<p>Or 4 . . . Kg8 5 g7, Kf7 6 Kxh7 and White wins.</p>
5 hxg6    Kg8<br/>
6 g7    Kf7<br/>
7 Kh7<br/>
<p>White wins</p>`,
'40': `<p>BLACK is faced with the task of defending his Pawn, while restraining White's from advancing.</p>
<p>The difficulties would increase, if it were Black's turn to move.</p>
<p>White therefore plays to bring about the position in the diagram, with Black to move. This he does by the process of triangulation.</p>
1 Kf2               Kg6<br/>
<p>On 1 . . . Ke5 2 g6, Kf6 3 h5, Ke6 4 g7, Kf7 5 h6, and it is clear that Black's King cannot be all over the board at the same time.</p>
2 Ke2    Kf5<br/>
3 Ke3    Ke5<br/>
4 g6    Kf6<br/>
5 h5    Kg7<br/>
6 Kxe4<br/>
<p>White wins</p>`,
'41': `<p>TO WIN this White must bring about the position in the diagram, with Black to move. He does this by tri-angulation.</p>
1 Kd5    Kc8<br/>
2 Kd4!<br/>
<p>White is now ready to meet 2 . . . Kc7 with 3 Kc5, and follow it up with 4 Kb6.</p>
2 . . .    Kd8<br/>
3 Kc4<br/>
<p>Still waiting for 3 . . . Kc7.</p>
3 . . .        Kc8<br/>
4 Kd5        Kc7<br/>
<p>The alternative is 4. . . Kd8 5 Kd6, Kc8 6 c7, Kb7 7 Kd7, Ka7 8 Kc6 (but not 8 c8=Q stalemate) Ka8 9 c8=Q+ and mate next.</p>
5 Kc5<br/>
<p>Now we have the position in the diagram—but it is Black to play. The rest is easy.</p>
5 . . .        Kc8<br/>
6 Kb6        Kb8<br/>
7 Kxa6        Kc7<br/>
8 Kb5        Kc8<br/>
9 Kb6        Kb8<br/>
<p>/0 c7+        Kc8</p>
11 a6        Kd7<br/>
12 Kb7<br/>
<p>White wins</p>`,
'42': `<p>THE problem for White is to force an exchange of Pawns. This would transform his two Pawns against one, to one Pawn against none.</p>
1 c5                   Kc8<br/>
<p>If 1 . . . b6 2 c6, Kc8 3 Kxb6 and it's all over.</p>
2 Kb6    Kb8<br/>
3 c6                 Ka8<br/>
<p>Hoping for 4 b7 stalemate. If instead 3 . . . Kc8 4 c7, Kd7 5 Kxb7 wins, or if 3 . . . bxc6 4 Kxc6, Kc8 5 Kb6, Kb8 6 b5, Kc8 7 Ka7 wins.</p>
<p>White can now win by 4 cxb7+, Kb8 5 Ka6, or by the following:</p>
4 Kc7                bxc6<br/>
5 Kxc6    Ka7<br/>
6 b5                Kb8<br/>
7 Kb6<br/>
<p>Definitely not 7 b6, Kc8 and Black escapes with a draw.</p>
7 . . .        Ka8<br/>
8 Kc7    Ka7<br/>
9 b6+<br/>
<p>White wins</p>`,
'43': `<p>WHITE'S strategy is simple: he forces an exchange of Pawns, (at the right time of course) moves his King to a dominating position, and wins.</p>
1 g3<br/>
<p>Not at once 1 f3+ as after 1 . . . gxf3 2 gxf3+, Kf4, Black has a draw.</p>
1 . . .        Kd4<br/>
<p>On 1 . . . Ke5, White goes after the Knight Pawn as follows: 2 Ke3, Kf5 3 Kd4, Kf6 4 Ke4, Kg5 5 Ke5, Kg6 6 Kf4, Kh5 7 Kf5, Kh6 8 Kxg4 and wins.</p>
2 f3        gxf3+<br/>
<p>If 2 . . . Ke5, White demonstrates the Queening of a doubled Pawn by this: 3 fxg4, Ke4 4 Kf2, K-e5 5 Ke3, Ke6 6 Kf4, Kf6 7 g5+, Kg6 8 Kg4, Kg7 9 Kf5, Kf7 10 g6+, Kg7 11 Kg5, Kg8 .12 Kf6, Kf8 13 g7+, Kg8 14 g4, Kh7 15 Kf7 and wins.</p>
3 Kxf3        Ke5<br/>
4 Kg4!<br/>
<p>The King must be aggressive. There is no win if the Pawn moves prematurely.</p>
4 . . .        Kf6<br/>
5 Kh5        Kf5<br/>
<p>Or 5 . . . Kg7 6 Kg5, Kf7 7 Kh6 etc.</p>
6 g4+        Kf6<br/>
7 Kh6        Kf7<br/>
8 g5        Kg8<br/>
9 Kg6<br/>
<p>White wins</p>`,
'44': `<p>WHITE wins this by beautiful timing of moves.</p>
1 Kb3<br/>
<p>With the very first move White can go wrong. For instance, if 1 Kb4, c5+ 2 dxc5+, Kc6 3 Kb3, Kxc5 and the position is a draw. Now if 1 . . . c5, White can reply 2 d5 avoiding the exchange of Pawns.</p>
1 . . .        Kc7<br/>
2  Kc3        Kd6<br/>
3 Kd3        Kd7<br/>
4 Ke4     Ke6<br/>
5  c5        Kf6<br/>
<p>If 5 . . . Kf7 6 Kf5, Ke7 7 Ke5, Kd7 8 Kf6, Kd8 9 Ke6, Kc7 10 Ke7, Kc8 11 Kd6, Kb7 12 Kd7 and Black's Pawn falls.</p>
6 d5!        Ke7<br/>
<p>On 6 . . . cxd5 7 Kxd5, Ke7 8 Kc6, Kd8 9 Kb7 assures the Pawn's future.</p>
7 d6+<br/>
<p>After 7 dxc6, Kd8 8 Ke5, Kc7</p>
9 Kd5, Kc8 10 Kd6, Kd8 11 c7+, <br/>
<p>Kc8 and Black has a draw.</p>
7 . . .          Kd7<br/>
8 Ke5          Kd8<br/>
9 d7!<br/>
<p>The point of the previous maneuvering.</p>
9 . . .         Kxd7<br/>
<p>Avoiding the capture loses faster: 9 . . . Ke7 10 d8=Q+, exd8 11 Kd6, Kc8 12 Kxc5, and we have a standard winning position.</p>
10 Kf6<br/>
<p>The King circles about to get behind the Pawn.</p>
10 . . .        Kd8<br/>
11 Ke6        Kc7<br/>
12 Ke7        Kc8<br/>
13 Kd6        Kb7<br/>
14 Kd7        Kb8<br/>
15 Kxc6        Kc8<br/>
16 Kd6        Kd8<br/>
17 c6        Kc8<br/>
18 c7<br/>
<p>Advances to the seventh without check, rendering the win certain.</p>
18 . .     .Kb7<br/>
19 Kd7<br/>
<p>White wins</p>`,
'45': `1 Kf1        Kd4<br/>
2 Kf2        Kc5<br/>
3 e4!<br/>
<p>THIS diverts Black from pursuing the Rook Pawn. If now 3 . . . Kb6 4 e5, Kxa6 5 e6 and White's Pawn cannot be caught.</p>
3 . . .        Kd4<br/>
4 Kf3        Ke5<br/>
5 Ke3        Ke6<br/>
6 Kd4        Kd6<br/>
7 e5+        Ke6<br/>
8 Ke4        Ke7<br/>
9 Kd5        Kd7<br/>
10 e6+        Ke7<br/>
11 Ke5<br/>
<p>The tempting 11 Kc6 (going after the Rook Pawn) is premature as Black takes the King Pawn without loss of time (one tempo). The continuation would be 11 . . . Kxe6 12 Kb7, Kd7 13 Kxa7, Kc7 14 Ka8, Kc8 and White cannot extricate his King, hence a draw.</p>
11 . .        Ke8<br/>
12 Kd6        Kd8<br/>
13 Kc6<br/>
<p>Now it will take Black two moves to capture the Pawn.</p>
13 . . .        Ke7<br/>
<p>Or quick suicide by 13 . . . Kc8</p>
14 e7 and mate next move.<br/>
14 Kb7        Kxe6<br/>
15 Kxa7    Kc7<br/>
16 Kb7<br/>
<p>White wins</p>`,
'46': ``,
'47': `<p>IT IS clear that White must capture the Knight Pawn in order to win. But how does he do so? The obvious 1 Kg4, Kh2 2 Kg5, Kg3 3 Kg6, Kxf4 leads to a draw.</p>
1 f6!        gxf6<br/>
2 f5<br/>
<p>Fixing the target. Now the King circles about and picks off the helpless victim.</p>
2 . . .        Kh2<br/>
3 Kg4        Kg2<br/>
4 Kh5        Kf3<br/>
5 Kg6        Kg4<br/>
6 Kxf6        Kh5<br/>
7 Kg7<br/>
<p>White wins</p>`,
'48': `1 Kb5        Kc3 <br/>
2 Kc5        Kd3 <br/>
3 Kd5        Ke3<br/>
4 Ke5        Kf3<br/>
5 Kf5        Kg3<br/>
<p>AND now, White does not play 6 Kg6 which allows 6 . . . Kxh4 and a draw, but with . . .</p>
6 h6!         gxh6 <br/>
7 h5         Kh4 <br/>
8 Kg6         Kg4 <br/>
9 Kxh6         Kf5<br/>
10 Kg7<br/>
<p>White wins</p>`,
'49': `<p>THE natural line of play would seem to be to go after the Knight Pawn by way of f5 and g6. Here is what would happen: 1 Kf5, Kf3 2 Kg6, Kg3 3 h5, Kh4 4 Kxg7 (there is nothing better) Kxh5 with a draw as result.</p>
<p>The winning idea is for White's King to reach g6 in a roundabout way—moving to e6, f7, and then g6!</p>
1 Ke6!        Kf4<br/>
2 Kf7        Kg3<br/>
<p>The desperate 2 . . . g5 leads to an easy White win after 3 h5, Kg3 4 Kg6.</p>
3 h5        Kh4<br/>
4 Kg6!<br/>
<p>Now we have the position after Black's third move in the first paragraph—but this time with Black to play.</p>
4. . .        Kxh3<br/>
5 Kxg7<br/>
<p>White wins</p>`,
'50': `<p>TO WIN this White must sacrifice—and at once, or he never gets another chance to do so.</p>
1 e6!<br/>
<p>Against any other move Black's reply of 1 . . . Ke7 assures him of a draw.</p>
1 . . .      fxe6<br/>
<p>Black might refuse to capture, with this result: 1 . . . Ke7 2 exf7, Kxf7 3 Kd5, Ke7 4 Ke5 and White with the opposition wins. </p>
<p>Or if 1 . . . f6 2 Kc5, Ke7 3 Kd5, Ke8 4 Kd6, Kd8 5 e7+, Ke8 6 Ke6, f5 7 Kxf5, Kxe7 8 Ke5, and again the force of the opposition wins.</p>
2 e5!<br/>
<p>Fixes the Pawn. Now the King plays to get behind the Pawn.</p>
2 . . .             Ke7<br/>
3 Kc5        Kd7<br/>
4 Kb6        Kd8<br/>
5 Kc6        Ke7<br/>
6 Kc7            Ke8<br/>
7 Kd6        Kf7<br/>
8 Kd7        Kf8<br/>
9  Kxe6            Ke8<br/>
10 Kf6        Kf8<br/>
11 e6        Ke8<br/>
12 e7<br/>
<p>White wins</p>
<p>##51</p>
<p>THE doubled Pawns find a unique means of keeping the King at bay.</p>
1 a5        Kc5<br/>
2 a4        Kd6<br/>
<p>Thwarted, the King tries coming around in front of the Pawns.</p>
3 Kd8    c5<br/>
4 a6        Kc6<br/>
5 a5<br/>
<p>Once again the Pawns set up a barricade.</p>
5 . . .              c4<br/>
6 Kc8              c3<br/>
7 a7              c2<br/>
8 a8=Q+          Kd6<br/>
9 Qh1<br/>
<p>White wins</p>`,
'52': `<p>THE doubled Pawns hold their own against the King until help arrives.</p>
1 Kf 1        Kc3<br/>
2 Ke2        Kd4<br/>
3 g4        Ke4<br/>
4 g3        Kd4<br/>
5 g5        Ke5<br/>
<p>Black must stop the passed Pawn even at the cost of deserting his own Pawn.</p>
6  g4<br/>
<p>Prevents the King from coming closer.</p>
6 . . .        Ke6<br/>
7 Kxe3        Kf7<br/>
8 Ke4<br/>
<p>Not at once 8 Kf4 as the reply 8 . . . Kg6 costs a Pawn and gives Black an easy draw.</p>
    8 . . .        Kg6<br/>
<p>Or 8 . . . Kg6 9 Kf4 followed by 10 Kf5.</p>
9 Kf4        Kf7<br/>
    10 Kf5        Kg7<br/>
    11 g6        Kg8<br/>
<p>If 11 . . . Kh6 12 g7 (certainly not 12 Kf6 stalemating Black) Kxg7 13 Kg5, and White having the opposition wins.</p>
12 Kf6        Kf8<br/>
    13 g7+        Kg8<br/>
14 g5        Kh7<br/>
15 g8=Q+<br/>
<p>Here too, the hasty 15 Kf7 stalemating Black, deprives White of the win.</p>
15 . . .        Kxg8<br/>
16 Kg6<br/>
<p>White wins</p>`,
'53': `1 Kg3!<br/>
<p>THIS apparent loss of time is the only way to a win. If instead 1 Kg5, Kf3 2 h4, Kg2 3 h5, Kh3! 4 Kg6, Kg4! (not 4 . . . Kh4 5 h3, Kxh3 6 Kxg7 and White wins) 5 h3+, Kh4 6 Kxg7, Kxh5(h5) and Black draws. Or if 1 Kg4, Kf2 2 h4, Kg2 3 h3, g6 4 Kg5, Kxh3, and the position is drawn.</p>
1 . . .         Ke3<br/>
<p>If 1 . . . Kf1 2 h4, g6 (or 2 . . . Ke2 3 h5, Ke3 4 h4, Ke4 5 Kg4, Ke3  6 Kf5, Kf3  7 h6, gxh6  8 h5 and White wins.) 3 Kf4!, Kg2 4 h5!, gxh5 5 h4 and White wins.</p>
2 h4        Ke4<br/>
3 Kg4    Ke5<br/>
4 Kg5    Ke4<br/>
5 h5        Kf3<br/>
6 Kf5!<br/>
<p>Not at once 6 Kg6 when 6 . . . Kg4 7 h3+, Kh4 ends in a draw.</p>
<p>White's actual move forces Black's King to retreat.</p>
6 . . .        Kg2<br/>
7 Kg6<br/>
<p>White wins the Pawn and the game.</p>`,
'54': `<p>WHITE has a great advantage in his outside passed Pawn. Its threat to march up the board keeps Black's King occupied, since he must eventually chase after it. Meanwhile White has time to pick off the abandoned Black Pawns.</p>
1 a5                  Kc6<br/>
2 a6                 Kb6<br/>
3 a7                 Kxa7<br/>
4 Kxc5     Kb7<br/>
5 Kd6       Kc8<br/>
6 Ke6      Kd8<br/>
7 Kxf5             Ke7<br/>
8 Kg6     Ke6<br/>
<p>If 8 . . . Kf8 9 Kf6 is a win with or without the move.</p>
9 f5 +     Ke7<br/>
10 Kg7<br/>`,
'55': `<p>IT IS important to Queen a Pawn on the right square, if there is a choice. Promoting on the wrong square might let the opponent get away with a draw when he should have lost.</p>
1 a4    h5<br/>
<p>The alternative 1 . . Kf7, trying to head off White's Pawns, is too slow, viz: 2 a5, Ke7 3 b6, axb6 (3 . . . Kd7 4 bxa7) 4 a6!, and White wins.</p>
2 a5    h4<br/>
3 b6                    axb6<br/>
4 a6!<br/>
<p>If  4 axb6, h3 5 b7, h2 6 b8=Q, h8=Q and the position is a draw.</p>
4 . . .    h3<br/>
5 a7    h2<br/>
6 a8=Q<br/>
<p>White wins</p>`,
'56': `<p>WHITE'S strategy is based on the fact that his Pawns are safe from capture, while Black's will both be lost if either of them makes a move.</p>
1 Kf4    Kb6<br/>
<p>The Pawns must not move. If for example 1 . . . h5 2 Kg5, Kb6 (or 2 . . . d5 3 Kxh5, d4 4 Kg4, d3 5 Kf3 and White overtakes the Pawn) 3 Kxh5, Kc7 4 Kg5, Kb6 5 Kf5, Kc7 6 Ke6, and the second Pawn goes.</p>
2 Kf5    Kc7<br/>
3 Kf6    Kb6<br/>
<p>Here too if 3. . . h5 4 Kg5 or if 3. . . d5 4 Ke5 and White will be in time to catch the second Pawn.</p>
4 Ke6        Kc7<br/>
<p>If 4 . . . h5 5 Kxd6, h4 6 c7, h3 7 c8=Q, h2 8 Qa6#.</p>
5 Kd5        h5<br/>
6 b6+        Kxb6<br/>
7 Kxd6        h4<br/>
8 c7        Kb7<br/>
9 Kd7<br/>
<p>White wins</p>`,
'57': `1 Kf7!        h5<br/>
<p>ON 1 . . . Kh8 instead, 2 Kg6 wins both of Black's Pawns.</p>
2 h4!<br/>
<p>The key move to break through. White cannot win with 2 Kf6 as 2 . . . h5xg4 3 h3xg4, Kh8 4 Kxg5, Kg7 gives Black the opposition and an easy draw.</p>
2 . . .                Kh6<br/>
<p>What else is there? if 2 . . . h5xg4 3 h4xg5, g3 4 g6+, Kh6 5 g7, g2 6 g8=Q wins, or if 2 . . . g5xh4 3 g5, h3 4 g6+, Kh6 5 g7, h2 6 g8=Q, h1=Q 7 Qg6#.</p>
 3 Kf6!        hxg4<br/>
<p>Or 3 . . . g5xh4 4 g5+, Kh7</p>
5 Kf7 and White wins.<br/>
4 hxg5+            Kh5<br/>
5 g6            g3<br/>
6 g7            Kg4<br/>
7 g8=Q+            Kf3<br/>
8 Kg5            g2<br/>
9 Kh4            Kf2<br/>
10 Qg3+            Kf1<br/>
11 Qf3+            Kg1<br/>
12 Kh3            Kh1<br/>
13 Qxg2#<br/>`,
'58': `1 Kf4!<br/>
<p>UNEXPECTED, but the obvious idea of immediately going after the Rook Pawn leads only to a draw: 1 Kf3, Kg8 2 Ke3, Kf8 3 Kd3, Ke7 4 Kc3, Kf6 5 Kb3, Kxg6 6 Kxa3, Kf5 7 Kb4, g5 8 a4, and both sides will Queen at the same time.</p>
1 . . .        Kg8<br/>
2 Ke5        Kf8<br/>
3 Kd6!    Ke8<br/>
4 Ke6        Kf8<br/>
<p>On 4 . . . Kd8 5 Kf7 is fatal.</p>
5 Kd7        Kg8<br/>
6 Ke7        Kh8<br/>
<p>Now we see the reason for the tour White's King made. It will take only four moves now to capture Black's Rook Pawn instead of the six it would have taken from the original position. Black's King meanwhile has been unable to make any progress, having been forced back to the corner.</p>
7 Kd6        Kg8<br/>
8 Kc5        Kf8<br/>
9 Kb4        Ke7<br/>
 10 Kxa3<br/>
<p>Black is in trouble. If he tries to get a passed Pawn, this is what happens: 10 . . . Kf6 11 Kb4, Kxg6 12 a4, Kf5 13 a5, g5 14 a6, g4 15 a7, g3 16 a8=Q, Kf4 17 Qg2 and White wins.</p>
    10 . . .        Kd6<br/>
<p>So he tries another defense.</p>
    11 Kb4        Kc6<br/>
    12 a4        Kb6<br/>
    13 Kc4        Kc6<br/>
    14 a5        Kc7<br/>
    15 Kd5<br/>
<p>White wins, since Black cannot stop the Rook Pawn and defend his own Pawn at the same time.</p>`,
'59': ``,
'60': `1 Kc4!    Kxf4<br/>
<p>NECESSARY, as 1 . . . a4 2 d5, a3 3 Kb3 is hopeless for Black.</p>
2 d5        Ke5<br/>
3 Kc5        f4<br/>
<p>Queening the Rook Pawn instead would result in this: 3. . . a4 4 d6, a3 5 d7, a2 6 d8=Q, a1=Q 7 Qh8+, and White wins the Queen on the diagonal.</p>
4 d6        f3<br/>
<p>Or 4 . . . Ke6 5 Kc6, f3 6 d7, f2 7 d8=Q, f1=Q 8 Qe8+, Kf6 9 Qf8+, and White wins the Queen.</p>
5 d7        f2<br/>
6 d8=Q    f1=Q<br/>
7 Qc8+    Kf5<br/>
8 Qf8+<br/>
<p>White wins the Queen on the file.</p>`,
'61': `<p>A CLEVER sacrifice transforms a drawish-looking position into a pretty win.</p>
1 Kd4!<br/>
<p>Not at once 1 c5, as after 1 . . . Ke6 2 Kd4, a4 3 Kc4, a3 4 Kb3, Kd5, and White loses instead of winning.</p>
1 . . .        Ke6<br/>
<p>On 1 . . . a4 instead, 2 Kc3, Ke6 3 Kb4 wins for White.</p>
2 Kc5        Ke5<br/>
3 Kb5        Kd4<br/>
<p>Expecting the continuation 4 c5, a4 5 c6, a3 with a comfortable draw. Instead of this, Black gets a rude shock.</p>
4 g5!        fxg5<br/>
5 c5        a4<br/>
<p>Black can Queen the other Pawn, with this result: 5 . . . g4 6 c6, g3 7 c7, g2 8 c8=Q, g1=Q  9 Qc5, and White wins the Queen.</p>
6 c6    a3<br/>
7 c7    a2<br/>
8 c8=Q    a1=Q<br/>
9 Qh8+<br/>
<p>White wins the Queen and the game.</p>`,
'62': `<p>AN APPARENTLY simple position, but how does White proceed? If 1 Kd8, (to attack the Pawns) Kc6 2 Ke7, f5! 3 gxf5, g4, and both sides will Queen their Pawns with a drawn result.</p>
1 a5!        Kc6<br/>
2 Kb8!<br/>
<p>Threatens to advance the Pawn and Queen with check.</p>
2 . . .        Kb5<br/>
3 Kb7        Kxa5<br/>
<p>Or 3 . . . f5 4 a6, fxg4 5 a7, g3 6 a8=Q, g2 7 Qa1 and White wins.</p>
4 Kc6        f5<br/>
<p>The best chance. If instead 4 . . . Ka6 5 Kd5, f5 6 gxf5, g4 7 Ke4 and Black's Pawn is lost. Or if 4 . . . Kb4 5 Kd5, f5 6 gxf5, g4 7 f6, and the Pawn reaches f8 with check winning for White.</p>
5 gxf5        g4<br/>
6 f6            g3<br/>
7 f7            g2<br/>
8 f8=Q        g1=Q<br/>
9 Qa3#!<br/>`,
'63': `<p>BLACK'S own King Rook Pawn loses the game for him. If White could only be induced to capture it, the position would be a draw!</p>
1 a3!<br/>
<p>The attractive 1 Ke5 instead leads to 1 . . . h5 2 c5, Kb5! (but not 2 . . . h4 3 c6, h3 4 c7, h2 5 c8=Q, h1=Q 6 Qc4+, Ka3 7 Qb3#) 3 Kd6, h4 4 c6, h3 5 c7, h2 6 c8=Q, h1=Q 7 Qc5+, Ka6! and a draw.</p>
1 . . .        h5<br/>
2 Kg3        h4+<br/>
3 Kh3!<br/>
<p>It is important not to remove the Pawn.</p>
3 . . .        Kxa3<br/>
4 c5        a4<br/>
5 c6        Kb2<br/>
6 c7        a3<br/>
7 c8=Q        a2<br/>
8 Qb7+        Kc2<br/>
9 Qc6+        Kb2<br/>
10 Qb5+        Kc2<br/>
11 Qa4+        Kb2<br/>
12 Qb4+        Kc2<br/>
13 Qa3        Kb1<br/>
14 Qb3+        Ka1<br/>
<p>The threat of stalemate would allow Black to draw—if he didn't have an extra Pawn!</p>
15 Kg4!        h3<br/>
16 Qc2        h2<br/>
17-Qc1#<br/>`,
'64': `<p>IN A position where the moves seem to be forced, it is easy to play mechanically—and let a sure win slip.</p>
1 b6        b3<br/>
2 b7        b2<br/>
3 b8=R!<br/>
<p>The unthinking promotion to a Queen instead allows 3. . . b1=Q 4 Qxb1 and with locked Pawn and King -- stalemate.</p>
3 . . .        Ka2<br/>
4 Ka4        b1=Q<br/>
5 Rxb1        Kxb1<br/>
6 Kb3<br/>
<p>White wins. He will capture Black's Pawn and proceed to Queen his own, while his opponent watches helplessly.</p>`,
'65': `1 Ke4<br/>
<p>SEIZES the opposition and forces Black to give way. He has two plausible defenses:</p>
<p>A] 1 . . .        Kd6 </p>
2 Kd4<br/>
<p>The attractive alternative 2 Kf5 is premature. Starting with that move it takes White seven more moves to capture Black's Rook Pawn and then Queen his own. In the meantime, Black captures on the Queen side, Queens his Pawn, and draws.</p>
2 . . .        Ke6<br/>
<p>On 2 . . . Kc6 White plays 3 Ke5 and after the reply 3 . . . Kb6 can move 4 Kd5, force the capture of the Knight Pawn and win, or he can switch to the King side by 4 Kf5, capture the Rook Pawn and win.</p>
3 Kc5        Kf5<br/>
4 Kxb5        Kg4<br/>
5 Kc4        Kxh4<br/>
6 b5        Kg3<br/>
7 b6        h4<br/>
8 b7        h3<br/>
9 b8= Q+        Kg2<br/>
10 Qg8+        Kf2<br/>
11 Qd5<br/>
<p>Threatens to continue with 12 Qh8.</p>
11 . .            Kg1<br/>
12 Qg5+        Kf2<br/>
13 Qh4+        Kg2<br/>
14 Qg4+        Kh2<br/>
15 Kd4        Kh1<br/>
16 Qxh3+ and wins<br/>
<p>B] 1 . . .        Kf6</p>
2 Kf4!<br/>
<p>White does not attack by 2 Kd5.</p>
<p>It would take eight moves to capture the Knight Pawn and Queen his own. In the same number of moves Black would capture the Rook Pawn, Queen his passed Pawn, and draw.</p>
2 . . .        Kg6<br/>
3 Ke5!<br/>
<p>White wins. He has the pleasant choice of winning on either side of the board, since he can force the capture of either of Black's Pawns.</p>`,
'66': `<p>A BEAUTIFUL example of distant opposition. The Kings are separated by the length of the board, but White's, believe-it-or-not, exerts irresistible pressure on Black's (opposition)!</p>
1 Ke7!<br/>
<p>White seizes the opposition, and for the rest of the play leaves Black with only one reasonable move in reply.</p>
1 . . .    Ke2<br/>
<p>If Black leaves the King file, White wins by attacking on the same file. For instance, if 1 . . . Kd2 2 Kd6, followed by 3 Kc5. Or if 1 . . . Kf2 2 Kf6, followed by 3 Kg5.</p>
2 Ke6!        Ke3<br/>
<p>If 2 . . . Kd3 3 Kd5 and 4 Kc5 wins, or if 2 . . . Kf3 3 Kf5 and 4 Kg5 wins.</p>
3 Ke5!        Ke2<br/>
4 Ke4!        Ke1<br/>
<p>Here too 4 . . . Kd2 is met by 5 Kd4 and 6 Kc5, while 4 . . . Kf2 succumbs to 5 Kf4 followed by 6 Kg5</p>
5 Ke3!        Kf1<br/>
<p>Unfortunately, Black must leave the file. There is no square left on it for retreat.</p>
6 Kf4        Ke2<br/>
7 Kg5        Kd3<br/>
8 Kxh5        Kc4<br/>
9 Kg4        Kxb4<br/>
10 h5        Ka3<br/>
11 h6        b4<br/>
12 h7        b3<br/>
13 h8=Q        b2<br/>
14 Qc3+        Ka2<br/>
15 Qc2        Ka1<br/>
16 Qa4+        Kb1<br/>
<p>The idea in this sort of position is to force Black to block his Pawn. Each time he does so, White gains time to bring his King closer.</p>
17 Kf3        Kc1<br/>
18 Qc4+        Kd2<br/>
19 Qb3        Kc1<br/>
20 Qc3+        Kb1<br/>
21 Ke3        Ka2<br/>
22 Qc2        Ka1<br/>
23 Qa4+        Kb1<br/>
24 Kd3        Kc1<br/>
25 Qc2#<br/>`,
'67': `1 a4        Kd6<br/>
<p>BLACK had no time to start his passed Pawn as White's Rook Pawn threatened to move up the board and Queen with check.</p>
2 Kb6<br/>
<p>Otherwise Black heads off the passed Pawn with 2 . . . Kc7.</p>
2 . . .    Kd7<br/>
<p>If he can get to c8, White's Rook Pawn will be harmless.</p>
3 Kb7        h5<br/>
4 a5        h4<br/>
5 a6        h3<br/>
6 a7        h2<br/>
7 a8=Q        h1=Q<br/>
<p>This might be a draw, except that in Queening first White has the advantage of giving a few checks.</p>
8 Qc8+        Kd6<br/>
9 Qc6+        Ke5<br/>
10 f4+<br/>
<p>White wins the Queen by discovered attack.</p>`,
'68': `1 a5    Kc5<br/>
2 Kb2!    f5<br/>
<p>IF BLACK attacks the Rook Pawn, the play goes like this: 2 . . . Kb5 3 Kc3, Kxa5 4 Kd4, Kb5 5 Ke4, Kc6 6 Kf5, Kd7 7 Kxf6, Ke8 8 Kxg5, Kf7 9 Kh6, Kf6 (or 9. . . Kg8 10 Kg6) 10 g5+, Kf7 11 Kh7 and White wins.</p>
3 gxf5        g4<br/>
<p>Hoping to promote at the same time as White, and draw.</p>
4 f6!<br/>
<p>Threatens to reach f8 and Queen with check.</p>
4...        Kd6<br/>
<p>To stop the Pawn if it takes an- other step.</p>
5 a6        g3<br/>
<p>Black has no time to play 5. . . Ke6 as 6 a7, g3 7 a8=Q wins.</p>
6 f7<br/>
<p>Renewing the threat of Queening with check.</p>
6 . . .         Ke7<br/>
7 a7        g2<br/>
<p>Will both sides Queen their Pawns simultaneously?</p>
8 f8=Q+    Kxf8<br/>
9 a8=Q+    Ke7<br/>
10 Qxg2<br/>
<p>White wins. It is just a coincidence that the composer of this ending is named Chekhover.</p>`,
'69': `1 f4<br/>
<p>TO THIS Black cannot reply 1 . . .  Pd5 as after 2 f5, d4 3 f6, d3 4 f7, d2 White's Pawn promotes to a Queen with check, and wins.</p>
1 . . .        Kb4<br/>
2 h4<br/>
<p>Now if Black moves 2 . . . Kc5 3 h5, and the Rook Pawn cannot be caught.</p>
2 . . .        d5<br/>
<p>The best defense: if White continues by 3 h5, then 3 . . . d4 and Black will Queen with check.</p>
3 f5!<br/>
<p>To meet 3 . . . d4 with 4 f6, threatening to Queen with check.</p>
3 . . .        Kc5<br/>
4 h5<br/>
<p>Stops the King from coming closer, the reply to 4. . . Kd6 being 5 h6 followed by 6 h7 and 7 h8=Q.</p>
4 . . .        d4<br/>
<p>Black in turn is ready to refute 5 h6 with 5 . . . d3.</p>
5 f6<br/>
<p>Renews the threat of Queening with check.</p>
5 . . .    Kd6<br/>
<p>Stops the Bishop Pawn but now comes. . . .</p>
6 h6<br/>
<p>Preventing 6. . . Ke6 as then 7 h7 wins.</p>
6 . . .        d3<br/>
<p>Now White cannot play 7 h7, so he threatens again to Queen with check.</p>
7 f7!        Ke7<br/>
8 h7        d2<br/>
9 f8=Q+        Kxf8<br/>
10 h8=Q+        Ke7<br/>
11 Qd4<br/>
<p>White wins. A beautiful composition, with Black's alternation of King and Pawn moves the only possible defense to White's seesawing Pawns.</p>`,
'70': `<p>THE outside passed Pawn keeps Black busy on one side of the board to the neglect of the other. White's King takes the opportunity to come down on the unprotected Pawns like a wolf upon the fold.</p>
1 a5                    Kb5<br/>
<p>Sooner or later the Pawn must be removed. If instead 1 . . . g5 2 hxg5, fxg5 3 Ke5, and Black must still play to capture the passed Pawn.</p>
2 Kd5        Kxa5<br/>
3 Ke6        f5<br/>
4 gxf5        gxf5<br/>
5 Kxf5        Kb6<br/>
6 Kg6        Kce7<br/>
7 Kxh6        Kd7<br/>
8 h5        Ke7<br/>
9 Kg7<br/>
<p>White wins</p>`,
'71': `<p>WHITE, a Pawn ahead, plays to exchange Pawns on the King side. This would leave a passed Pawn which Black would have to keep under surveillance. White meanwhile could switch his attack to the other side of the board and win the game there.</p>
1 g4        a5<br/>
2 a4        Kf6<br/>
3 h4        Ke6<br/>
<p>On 3 . . . Kg6 4 Kd5, Kf6 5 Kc5, Ke5 6 Kb5, Kf4 7 Kxa5, Kxg4 8 Kb6, and White will Queen his Pawn.</p>
4 g5        Kf7<br/>
5 Kf5        Kg7<br/>
6 h5        Kf7<br/>
<p>If 6 . . . h6 7 g6, f8 8 Ke6, and the King goes over to the Queen side, since his King side Pawns are safe from capture.</p>
7 Ke5        Ke7<br/>
8 g6        hxg6<br/>
9 hxg6        Ke8<br/>
<p>On 9 . . . Kf8, White can win it on the King side if he wishes, by 10 Kf6, since the Pawn advances to the seventh rank without checking.</p>
10 Kd5        Kf8<br/>
<p>Black's King, unfortunately for him, cannot be in two places at the same time.</p>
11 Ke5 <br/>
<p>White wins</p>`,
'72': `<p>WHITE has three Pawns to two. An exchange of Pawns, leaving him with two Pawns to one, would greatly increase his advantage. By means of a temporary sacrifice, White brings about an exchange.</p>
1 g4+!                  hxg4+<br/>
<p>There is no hope in 1 . . . Kg6 2 g5, and White has a passed Pawn on the King side.</p>
2 Kg3                 Kg6<br/>
<p>If 2 . . . Ke5 3 Kxg4, Kd4 4 h5, Kc4 5 h6, and the Pawn Queens long before Black can promote his Pawn.</p>
3 Kxg4                  Kh6<br/>
4 Kf5<br/>
<p>White can go gaily about his business, since Black must lose time disposing of the passed Pawn.</p>
4 . . .             Kh5<br/>
5 Ke5                Kxh4<br/>
6 Kd5                Kg5<br/>
7 Kc5                Kf6<br/>
8 Kxb5            Ke7<br/>
9 Kc6                Kd8<br/>
10 Kb7               Kd7<br/>
11 b5<br/>
<p>White wins</p>`,
'73': `<p>A CLEVER break-through by White's Pawns!</p>
1 c6!        Kb6<br/>
<p>If 1 . . . dxc6 instead, then 2 d6 forces 2. . . exd6, after which White plays 3 f5 and the Pawn marches merrily up the board.</p>
2 d6!        exd6<br/>
<p>Other moves lose instantly:</p>
<p>A]</p>
<p>2</p>
<p>. . Kxc6</p>
3 dxe7<br/>
<p>B]</p>
2 .<br/>
<p>. . dxc6</p>
3 dxe7<br/>
<p>C]</p>
2 .<br/>
<p>. . e6</p>
3 cxd7<br/>
3 f5        Kc7<br/>
<p>He must try to stop the passed Pawn.</p>
4 f6        Kd8<br/>
5 c7+        Kxc7<br/>
<p>The unhappy King cannot be in two places at once.</p>
6 f7 easily Queens next.<br/>
<p>White wins</p>`,
'74': `1 g6!<br/>
<p>THE only way to break through! White threatens 2 gxh7, winning on the spot.</p>
1 . . .        h6<br/>
<p>The alternative 1 . . . hxg6 leads to this: 2 hxg6, Kf8 3 Kd6 (diagonal opposition) Ke8 4 Ke6, Kf8 (if 4. . . Kd8 5 Kf7 ends the struggle) 5 Kd7, Kg8 6 Ke7, Kh8 7 f6, gxf6 8 Kf7, f5 9 g7+ and White mates in two.</p>
2 Kd5<br/>
<p>Not at once 2 f6+, gxf6+ 3 Kf5, Kf8 4 Kxf6, Kg8 5 g7, Kh7, and Black has a draw.</p>
2 . . .        Kf6<br/>
<p>On 2 . . . Kd7 3 f6 is decisive.</p>
3 Ke4        Kg5<br/>
4 Ke5        Kxh5<br/>
5 Ke6        Kg5<br/>
6 f6!<br/>
<p>Now!</p>
6 . . .         gxf6<br/>
<p>Or 6. . . Kxg6 7 f7 followed by 8 f8=Q.</p>
7 g7 escapes to Queen.<br/>
<p>White wins</p>`,
'75': `1 Kb4                    Kd4<br/>
2 a4                       Kd5<br/>
3 a5                   bxa5+<br/>
<p>IF 3 . . . Kd6 instead, 4 axb6 wins at once.</p>
4 Ka4!<br/>
<p>Unexpected, but the only way to win. After 4 Kxa5, Black forces a draw by 4 . . . Kc5 5 Ka4, Kb6.</p>
4 . . .     Kc5<br/>
5 Kxa5<br/>
<p>Now we have the position in the previous note (after 4 . . . Kc5) but with Black to move.</p>
5 . . .        Kd6<br/>
6 b6        axb6+<br/>
<p>No better is 6. . . Kc6 when 7 bxa7 is conclusive.</p>
7 Kxb6<br/>
<p>White wins</p>`,
'76': `<p>BOTH sides have Pawns which are immune from capture. White's are further advanced, so he can venture on a combination.</p>
1 Ke2        Kb7<br/>
2 Kd3        Ka8<br/>
3 Kc4        Kb7<br/>
<p>Black must not push on by 3 . . . f3 as the reply 4 Kd3 winning the Pawn is the penalty.</p>
4 Kc5        f3<br/>
5 Kd6        f2<br/>
6 a8=Q+        Kxa8<br/>
7 Kc7        f1=Q<br/>
8 b7+        Ka7<br/>
9 b8=Q+        Ka6<br/>
10 Qb6#<br/>`,
'77': `1 Ke4        Kg4<br/>
<p>OBVIOUSLY if 1 . . . Kxh2 2 g4, and the passed Pawn can never be caught.</p>
2 h4<br/>
<p>And now the Knight Pawn may not be captured.</p>
2. . .        Kh5<br/>
3 Kf4        Kh6<br/>
4 g4        Kg6<br/>
5 h5+        Kh6<br/>
6 Ke4        Kg5<br/>
7 Kf3        Kh6<br/>
8 Kf4        Kh7<br/>
9 g5        Kg7<br/>
10 g6        Kh6<br/>
11 Kg4        Kg7<br/>
<p>Naturally, if 11 . . d3 12 Kf3 will win the Pawn.</p>
12 Kg5!        d3<br/>
13 h6+        Kg8<br/>
14 Kf6         d2<br/>
 15 h7+         Kh8<br/>
16 Kf7         d1=Q<br/>
17 g7+        Kxh7<br/>
18 g8=Q+         Kh6<br/>
19 Qg6#<br/>`,
'78': `1 a3!        f5<br/>
<p>BLACK goes straight for a Queen. If he attacks the Rook Pawns instead, the play would go as follows: 1 . . . Ka5 2 Kb7, Kxa4 (or 2 . . . f5, changing plans in mid-stream, 3 gxf5, g4 4 f6, g3 5 f7, g2 6 f8=Q, g1=Q 7 Qb4#) 3 Kc6, Kxa3 4 Kd5, Kb4 5 Ke5, Kc5 6 Kf6, Kd6 7 Kxf7, Ke5 8 Kg6, Kf4 9 Kh5, Ke5 10 Kxg5, Ke6 11 Kg6, Ke7 12 g5, Kf8 13 Kh7 and White wins.</p>
2 gxf5        g4<br/>
3 f6        g3<br/>
4 f7        g2<br/>
5 f8=Q        g1=Q<br/>
6 Qc8+        Ka5<br/>
<p>If 6 . . . Kb6 7 Qb7+, Kc5 (on 7 . . . Ka5 8 Qb5#.) 8 Qa7+ and White wins the Queen.</p>
7 Qc3+        Kb6<br/>
<p>If 7 . . . Ka6 8 Qc4+, Kb6 9 a5+, Kxa5 10 Qb4+, Ka6 11 Qa4+, Kb6 12 Qa7+, and White wins the Queen.</p>
8 a5+        Kb5<br/>
9 Qb4+        Ka6<br/>
<p>On 9 . . . Kc6 10 Qb7+, Kd6 11 Qb6+ is a brutal but convincing exchange of a Queen.</p>
10 Qb7+        Kxa5<br/>
11 Qb4+        Ka6<br/>
12 Qa4+        Kb6<br/>
13 Qa7+<br/>
<p>White wins the Queen and the game.</p>`,
'79': `1  f3<br/>
<p>FORCING an exchange will leave White with a passed Pawn.</p>
    1 . . .         gxf3+<br/>
<p>If Black avoids the exchange by 1 . . . g3, then 2 f4 followed by 3 Kf3 wins the luckless Pawn.</p>
2 Kxf3        Kf5<br/>
3 g4+        Kg5<br/>
4 b4<br/>
<p>In order to block the position on the Queen side. Black's Pawns will be easier to pick off if they are immovable.</p>
4 . . .        b6<br/>
5 a4        Kg5<br/>
6 Kf4        Kf6<br/>
7 g5+        Kg6<br/>
8 b5        a5<br/>
9 Kg4        Kg7<br/>
10 Kf5        Kf7<br/>
11 Ke5<br/>
<p>Poses a difficult problem. How does Black protect his Pawns while contending with the dangerous passed Pawn?</p>
11 . . .        Ke7<br/>
12 g6        Ke8<br/>
13 Kd6        Kf8<br/>
14 Kc6<br/>
<p>White wins</p>`,
'80': `<p>UNASSISTED by the King, White's </p>
<p>Pawns break through by sheer force.</p>
1  c5                   Kg4<br/>
<p>Any Pawn move instead loses immediately: 1 . . . dxc5 2 bxc5 followed by 3 d6 wins, or if 1. . . b6 2 axb6 gives White a passed Pawn.</p>
2 b5!<br/>
<p>Threatens to continue with 3 c6, bxc6 4 bxa6 and White wins.</p>
2  . . .    dxc5<br/>
<p>If 2 . . . axb5 3 c6 is decisive.</p>
3 b6        cxb6<br/>
4 d6<br/>
<p>White wins, his Queen Pawn having a clear road to the last square.</p>`,
'81': `1 c5!<br/>
<p>THE right moment for the break-through. Black must not be given time for 1 . . . Kc8, consolidating his position.</p>
1 . . .    bxc5<br/>
<p>If 1 . . . dxc5 2 d6, cxd6 3 Kxd6 b5 followed by 4 Kc6, and all Black's Pawns will fall.</p>
2 Kb5    Kd7<br/>
3 a4<br/>
<p>Not at once 3 Kxa5, as after 3 . . . c6 Black has counter-play.</p>
3 . . .    Kc8<br/>
<p>Whereas if now 3 . . . c6+ (instead of 3 . . . Kc8) 4 dxc6, Kc7 5 b3, and Black is helpless.</p>
4 Kxa5        Kb7<br/>
5 Kb5        Ka7<br/>
6 Kc6        Kb8<br/>
7 a5        Kc8<br/>
8 a6        Kb8<br/>
9 a7+        Kxa7<br/>
<p>The rest is no strain on White.</p>
10 Kxc7           Ka6<br/>
11 Kxd6           Kb5<br/>
12 b3                Kb4<br/>
13 Kc6<br/>
<p>White wins</p>`,
'82': `<p>A FLOCK of Pawns can make life miserable for a Queen, however nimble she may be. </p>
1 a6      f1=Q<br/>
2 a7<br/>
<p>Threatens to advance, become a Queen and checkmate.</p>
2 . . .           Qa1<br/>
<p>If the King tries to flee by 2 . . .   Kg8, then 3 a8=Q+, Kf7 4 Qb7+, Kxf6 (on 4 . . .Kf8 5 Qf7+, Kg8 6 Qe8#) 5 Qg7+, Kf5 6 Qf7+, and Black's Queen falls.</p>
3 f7        Qa3<br/>
<p>Prevents the Pawns on the seventh taking another step.</p>
4 d6<br/>
<p>Poses a problem, since the Queen Pawn (which may not be taken) screens the Bishop Pawn, which threatens to Queen.</p>
4 . . .        Qf3<br/>
<p>Solves the problem—temporarily.</p>
5 d5!<br/>
<p>How now?</p>
5 . . .        Qxf7<br/>
6 a8=Q+    Qg8<br/>
7 Qa1+        Qg7+<br/>
8 Qxg7#<br/>
<p>White wins</p>`,
'83': `<p>BLACK is a Pawn ahead, and has two connected passed Pawns. His advantage in Force, Space and Time is enough, according to Znosko-Borovsky, to guarantee a win. Despite his superiority in these elements Black is lost! White wins this by an intangible element—Strength of Position!</p>
<p>The fact that victory is brought about by the doubled Pawns, generally a weakness, is an amusing feature.</p>
1 f5<br/>
<p>Threatens to continue with 2 e6, breaking through for a Queen.</p>
1 . . .         e6<br/>
<p>If 1. . . gxf5 instead, 2 e6, fxe6 3 g6 does the trick.</p>
2 fxe6        fxe6<br/>
3 f4        Kb8<br/>
4 f5!        exf5<br/>
<p>Or 4 . . . gxf5 5 g6, and White wins.</p>
5 e6        Kc8<br/>
6 e7<br/>
<p>White wins</p>`,
'84': `<p>WHITE breaks through what seems an impregnable barrier.</p>
1 g3+    fxg3+<br/>
<p>Against a refusal to capture, White proceeds as follows: 1 . . . Kg5 2 g4, Kh4 3 Kg2, Kg5 4 Kh3, Kh6 5 Kh4, Kg6 6 g5, Kg7 7 Kh5, Kh7 8 g6+, Kg7 9 Kg5, Kg8 10 Kf6, Kf8 11 Ke6, Kg7 12 Kd7, and White wins.</p>
2 Kg2        Kh5<br/>
3 Kxg3        Kg5<br/>
4 f4+        exf4+<br/>
5 Kf3        Kg6<br/>
6 Kxf4        Kf6<br/>
7 e5+        dxe5+<br/>
8 Ke4        Kf7<br/>
9 Kxe5        Ke7<br/>
10 d6+        cxd6+<br/>
11 Kd5        Ke8<br/>
12 Kxd6        Kd8<br/>
13 c7+         Kc8<br/>
14 Ke6<br/>
<p>Unforgivable would be the precipitate 14 Kc6, allowing a draw by stalemate.</p>
14 . . .        Kxc7<br/>
15 Ke7        Kb8<br/>
16 Kd6        Kb7<br/>
17 Kd7        Kb8<br/>
18 Kc6        Ka7<br/>
19 Kc7        Ka8<br/>
20 Kxb6        Kb8<br/>
21 Ka6        Ka8<br/>
<p>On 21 . . . Kc7 22 Ka7 escorts the Pawn to the eighth square.</p>
22 b6    Kb8<br/>
23 b7    Kc7<br/>
24 Ka7<br/>
<p>White wins</p>`,
'85': `<p>IT IS clear that White's hopes of winning depend on Queening the Rook Pawn, but how does he start? If 1 a4 (the natural move) Kg3!  2 a5, h5 3 a6, h4 4 a7, h3 5 a8=Q, h2#! Or if 1 Kxg2, Kg5 2 a4, bxa3e.p.  3 bxa3, Kf6 4 a4, Ke7 5 a5, Kd8 6 a6, Kc8 7 a7, Kb7, and Black wins the Pawn and the ending.</p>
1 f6!<br/>
<p>Throws a Pawn in the path, so that Black's King cannot reach d8 directly </p>
1 . . .         gxf6<br/>
2 Kxg2     Kg5<br/>
3 a4         bxa3e.p.<br/>
4 bxa3         Kf5<br/>
5 a4         Ke5<br/>
<p>Now if 6 a5, simply 6 . . . Kxd5, while 6 c6 is met by 6 . . . d6 followed by 7 . . . Kxc6, wining for Black. Therefore:</p>
6 d6!        cxd6<br/>
<p>Clearly, if 6 . . . c6 7 a5, Kd5 8 a6 wins.</p>
7 c6!<br/>
<p>White strews the Pawns about, and Black stops to pick them up, as Atalanta did the golden apples that Milanion threw in her path in their legendary race.</p>
7 . . .        dxc6<br/>
8 a5<br/>
<p>The Pawn, safely out of reach, is sure to reach the Queening square.</p>
<p>White wins</p>`,
'86': `1 h6        Nd6<br/>
2 h7        Nf7+<br/>
3 Ke7        Nh8<br/>
<p>IF 3 . . . Ne5 instead (playing for 4 h8=Q, Ng6+ winning the Queen) 4 Kf6, Nd7+ 5 Kg7 keeps the Knight at a distance, and wins.</p>
<p>If White is careless now in chasing the Knight, this may happen: 4 Kf8, Ke5 5 Kg7, Ke6 6 Kxh8, Kf7, and White has been stalemated.</p>
4 Kf6!<br/>
<p>Maintains the opposition. White will continue with 5 Kg7, capture the Knight and win.</p>`,
'87': `1 e6!        Ne2+<br/>
<p>WHITE must move out of check, and has choice of seven squares. One, and only one, is the right square that assures White of a win. Moving to any of the others leads to a draw, as follows:</p>
2 Kf3, Nd4+, winning the Pawn<br/>
2 Kh3, Nf4+, winning the Pawn<br/>
<p>C] 2 Kg4, Nc3 3 e7, Nd5 4 e8=Q,</p>
<p>Nf6+, winning the Queen</p>
2 Kh4, Nf4     3 e7, Ng6+, winning the Pawn<br/>
2 Kf2, Nc3    3 e7, Ne4+,   4 Ke3, Nd6, stopping the Pawn (and capturing it later with the King).<br/>
2 Kg2, Nf4+, winning the Pawn<br/>
<p>How that Knight hops around!</p>
2 Kh2!!<br/>
<p>This is the right move, to which there is no reply.</p>
<p>White wins</p>`,
'88': `1 Kd5<br/>
<p>IF AT once 1 b7, Ne5+ 2 Kd5, Nd7 3 Kd6, Nb8 4 Kc7, Na6+ 5 Kb6, Nb8 6 Ka7, Nd7, and Black draws.</p>
1 . . .    Ne5<br/>
<p>The best chance. There is no hope in 1. . . Ne3+ 2 Kc5, nor in 1. . . Nf6+ 2 Kc6. Now comes an amusing continuation:</p>
2 g3+    Kf5<br/>
3 g4+    Kf6<br/>
4 g5+    Kf5<br/>
5 g6    Kf6<br/>
<p>The King is torn between obligation to his Knight, and the necessity (let alone desire) to capture the impudent Pawn.</p>
6 g7<br/>
<p>White wins, having set Black a task too much even for a King to cope with.</p>`,
'89': `<p>CLEVER defense disposes of one White Pawn, but the one that remains renders Black's Knight hors de combat.</p>
1 g6        Nd6<br/>
2 g7        Ne8<br/>
3 g8=Q        Nf6+<br/>
4 Kg5!        Nxg8<br/>
5 d6!<br/>
<p>Prevents the Knight from emerging, and threatens to move on and Queen with check.</p>
5 . . .        g3<br/>
<p>All that is left, neither King nor Knight being able to head off the Queen Pawn.</p>
6 d7    g2<br/>
7 d8=Q+<br/>
<p>White wins</p>`,
'90': `1 Kg6        Ne5+<br/>
2 Kf6        Ng4+<br/>
3 Ke6        Nxh6<br/>
4 b6            Nf7<br/>
<p>BLACK is willing to sacrifice one Knight so that the other can overtake the dangerous advanced Pawn.</p>
5 Kxf7        Ne45<br/>
<p>Attacks both Pawns.</p>
6 b7        Nd6+<br/>
<p>Did White overlook this?</p>
7 Ke7        Nxb7<br/>
8 b4<br/>
<p>Paralyzes the Knight.</p>
8 . . .        Kg5<br/>
9 Kd7        Kf6<br/>
10 Kc7<br/>
<p>White captures the Knight and wins</p>`,
'91': `1 a5        Bf8<br/>
<p>IN ORDER to stop the Pawn, Black tries to get his Bishop to the diagonal running from his a7 to g1.</p>
2 Kd5<br/>
<p>White of course plays to keep the Bishop off the line.</p>
2 . . .        Bh6<br/>
<p>Aiming at the square e3.</p>
3 g5+!        Bxg5<br/>
<p>If 3 . . . Kxg5 4 a6 followed by 5 a7 and the coronation at a8.</p>
4 Ke4!        Bh4<br/>
5 Kf3!<br/>
<p>White wins. His Pawn will march on, fearing neither the King who is too far off, nor the Bishop who can no longer interfere with its progress.</p>`,
'92': `1 Kd5!<br/>
<p>WHITE does not play 1 b7 immediately, as after 1 . . . Be5 in reply followed by 2 . . . Bb8, the position is a draw.</p>
1 . . .        Be5<br/>
2 g3+        Kf5<br/>
3 g4+        Kf6<br/>
<p>The alternative is 3. . . Kf4 leading to 4 g5, Kf5 5 g6, Kf6 6 g7, and White wins.</p>
4 g5+        Kf5<br/>
5 g6        Kf6<br/>
<p>If 5 . . . Bc3 instead, then 6 b7, Be5 7 b8=Q, Bxb8 8 g7 wins.</p>
6 g7 <br/>
<p>White wins</p>`,
'93': `1 Kf5<br/>
<p>BEFORE advancing the passed Pawn, White fights to keep the Bishop from occupying the long diagonal.</p>
1 . . .        Bb6<br/>
2 Ke4<br/>
<p>But not 2 Ke5, as after 2 . . . Ke2 3 h7, Kd3, and the Bishop reaches d4.</p>
2 . . .        Bd8<br/>
3 Ke5!        Bg5<br/>
<p>If Black tries 3 . . . Be7, then</p>
4 h7, Bxb4 5 Kd4, Ba3 6 Kc3, and control of the long diagonal wins for White.<br/>
4 h7        Bc1<br/>
5 Kd5        Bb2<br/>
6 Kc5        Kf2<br/>
7 Kxb5        Kf3<br/>
<p>Since the Bishop will not be able to cope with both passed Pawns, Black rushes his King over to dispose of the Rook Pawn.</p>
8 Kc6        Kf4<br/>
9 b5        Kf5<br/>
10 b6        Kg6<br/>
<p>Is Black in time?</p>
11 b7        Be5<br/>
12 b8=Q        Bxb8<br/>
13 h8=Q<br/>
<p>White wins</p>`,
'94': `1 Kg7        Bb3<br/>
2 h5        Kd7<br/>
<p>APPARENTLY Black will attend to the Rook Pawn with his Bishop, while his King blockades the King Pawn—but White has a few surprises!</p>
3 h6        Bc2<br/>
4 Kf7!<br/>
<p>Threatens to win by 5 e6+ followed by 6 e7. The natural move 4 Kf6 (instead of 4 Kf7) allows Black to reply 4. . . Ke8 and draw the position.</p>
4 . . .        Bb3+<br/>
5 e6+!<br/>
<p>Astonishing! Not only does White give away a Pawn, but he lets it be captured with check!-a beauty!</p>
5 . . .        Bxe6+<br/>
6 Kf6        Bg8<br/>
7 Kg7<br/>
<p>White wins</p>`,
'95': `<p>PASSED Pawns on both sides of the board can make life difficult for a lone Bishop.</p>
1 c5        Kg5<br/>
2 c6        Bd8<br/>
3 Ke5        Kh6<br/>
<p>To meet 4 Ke6 with 4 . . . Kg7  5 f6+, Kf8, and Black has a draw.</p>
4 f6!        Kh7<br/>
5 Ke6        Kg8<br/>
6 Kd7        Ba5<br/>
7 Ke8<br/>
<p>White wins</p>`,
'96': `1 a5!<br/>
<p>THE plausible 1 b5 would be refuted by 1 . . . Kd8 2 Kb7, Kd7 3 b6, Ba5! 4 Ka7, Bxb6+ 5 Kxb6, Kc8 6 Ka7 (or 6 a5, Kb8) Kc7 7 a5, Kc8 8 a6, Kc7, and Black draws.</p>
1 . . .        Kd8<br/>
<p>If 1 . . . Bxb4 2 a6, and the Pawn cannot be stopped.</p>
2 a6        Bf2<br/>
3 Kb7    Kd7<br/>
4 b5        Kd8<br/>
5 a7        Bxa7<br/>
6 Kxa7<br/>
<p>White wins</p>`,
'97': `1 c7        Bc6+<br/>
2 b7!<br/>
<p>UNEXPECTED, but the move that wins. If instead 2 Kb8, Bb7 3 b5+, Kxb5, 4 c8=Q, Bxc8 5 Kxc8, Kxb6, and Black draws. Or if 2 Kb8, Bb7 3 b8=Q, Bxc8 4 Kc7, Kb5 (but not 4 . . . Bb7 5 b5+, Kxb5 6 Kxb7, and Black has been swindled) 5 Kxc8, Kxb6 and the position is a draw.</p>
2 . . .        Bxb7+<br/>
3 Kb8        Kb6<br/>
4 b5!<br/>
<p>White wins, as Black must either abandon his Bishop, or move it and allow the Pawn to Queen.</p>`,
'98': `<p>EVEN without the help of the King, a couple of passed Pawns can be re-markably effective against a Bishop.</p>
1 f5        Kg3<br/>
2 g5!        hxg5<br/>
<p>If 2 . . . Bxh5 3 gxh6 wins at once, or if 2 . . . Kg4 3 g6, Bd5 4 f6, Kxh5 5 f7, and White wins.</p>
3 h6        Bg8<br/>
4 f6        Kf4<br/>
5 h7        Bxh7<br/>
6 f7<br/>
<p>White wins</p>`,
'99': `1 Kg5<br/>
<p>THE winning idea is to bring the</p>
<p>King around to d8.</p>
1 . . .         Kf7<br/>
2 Kf5        Bd7+<br/>
3 Ke5         Ba4<br/>
4 Kd6        Bb5<br/>
5 Kc7        Ba4<br/>
6 Kd8         Bb5<br/>
7 g8=Q+          Kxg8<br/>
8 e8=Q+         Bxe8Q<br/>
9 Kxe8<br/>
<p>White wins</p>`,
'100': `1 c6<br/>
<p>THE impulsive 1 a7 is met by 1 . . . Bg2, wrecking White's chances of a win.</p>
1 . . .        dxc6<br/>
2 Kc5<br/>
<p>Here too if 2 a7, c5+ 3 Kxc5, Bg2, and Black draws.</p>
2 . . .        Bc8<br/>
3 a7        Bb7<br/>
4 Kd6<br/>
<p>Threatens to win by 5 Ke7 followed by 6 f7+.</p>
4 . . .        Kf7<br/>
5 Kc7        Ba8<br/>
6 Kb8<br/>
<p>White wins. He captures the imprisoned Bishop and then Queens his Rook Pawn.</p>`,
'101': `1 c7        Rd6+<br/>
2 Kb5<br/>
<p>EVERY move of White's must be timed right. For instance, if 2 Kb7, Rd7 followed by capturing the pinned Pawn draws, or if 2 Kc5, Rd1 followed by 3 . . . Rc1+ with a Pawn skewer capture, does likewise.</p>
2 . . .        Rd5+<br/>
3 Kb4        Rd4+<br/>
4 Kb3        Rd3+<br/>
5 Kc2        Rd4<br/>
<p>With this idea: 6 c8=Q, Rc4+! 7 Qxc4, and Black draws by stalemate.</p>
6 c8=R!<br/>
<p>Under-promotes to a Rook, and foils the stalemate try. Pieces are now even, but White threatens to mate by 7 Ra8+.</p>
6 . . .        Ra4<br/>
<p>Kb3</p>
<p>Attacks the Rook and threatens 8 Rc1 mate. White wins a Rook and the game.</p>`,
'102': `1 Kf7        Rf2+<br/>
<p>OBVIOUSLY if 1 . . . Ra8 2 g8=Q, Rxg8 3 Kxg8, and the remaining Pawn becomes a Queen.</p>
2 Ke6        Re2+<br/>
<p>The idea is to annoy the King enough to make him come down the board, whereupon the Rook can get to the first rank and hold back the Pawns.</p>
3 Kf5     Rf2+<br/>
<p>If at once 3 . . . Re8, then 4 Kf6, Kc7 5 Kf7, Kd7 6 g8=Q wins for White.</p>
4 Ke4        Re2+<br/>
5 Kf4!<br/>
<p>The natural 5 Kf3 fails after 5 . . . Re8 6 Kf4, Rg8 7 Kf5, Rxg7, and the Rook giving up his life for the second Pawn, draws for Black.</p>
5 . . .    Re8<br/>
6 Kg5    Kc7<br/>
7 Kh6    Kd7<br/>
8 Kh7    Ke7<br/>
9 g8=Q<br/>
<p>White wins</p>`,
'103': `<p>A LONE Knight can mate! Without a Pawn on the board, Black would be quite safe. As it stands, the Pawn is compelled to move down and hem in its own King.</p>
1 Kcl        a3<br/>
2 Nc2+        Ka2<br/>
3 Nd4        Ka1<br/>
4 Kc2        Ka2<br/>
<p>Or 4 . . . a2 5 Nb3#.</p>
5 Ne2        Ka1<br/>
6 Nc1        a2<br/>
7 Nb3#<br/>`,
'104': `1 Nc5        Kd2<br/>
2 Na4!<br/>
<p>IF WHITE had played 2 Ne4+ instead, the reply 2 . . . Ke3 would threaten to capture the Knight and then the Pawn. After White's actual move, Black must lose time chasing after the Knight.</p>
2 . . .         Kd3<br/>
3 Kg2         Kc4<br/>
4 Kf3         Kb3<br/>
5 Ke4         Kxa4<br/>
6 Kd5<br/>
<p>White has gained time to bring his King to a dominating position. The rest is elementary.</p>
6 . . .         Kb5<br/>
7 c4+        Kb6<br/>
8 Kd6        Kb7<br/>
9 c5         Kc8<br/>
10 Kc6!<br/>
<p>White wins</p>`,
'105': `1 Kd3<br/>
<p>WHITE does not go after the Pawn, as 1 Kb4, Ka1 2 Kxa3 is a draw by stalemate.</p>
1 . . .         Ka1<br/>
2 Na4!<br/>
<p>Instead, he gives up his own valuable Pawn!</p>
2 . . .        Kb1<br/>
3 Kd2        Ka1<br/>
4 Kc1<br/>
<p>Forces Black to take it.</p>
4 . . .         Kxa2<br/>
5 Kc2         Ka1<br/>
6 Nc5         Ka2<br/>
7 Nd3         Ka1<br/>
8 Nc1         a2<br/>
9 Nb3#<br/>`,
'106': `1 Na2!<br/>
<p>IMMOBILIZES the Pawn, and avoids such dangers as this: 1 Kf5, Kg8 2 Kg6, Kh8 3 h7, a2 4 Nxa2, stalemate.</p>
1 . . .        Kf8<br/>
2 Kf6!        Kg8<br/>
3 Kg6        Kh8<br/>
4 Nb4        Kg8<br/>
5 h7+        Kh8<br/>
6 Nc6        a2<br/>
7 Nd8        a1=Q<br/>
8 Nf7#<br/>`,
'107': `1 h3<br/>
<p>ON 1 Ng5+, Kg4 draws easily.</p>
1 . . .        Kg3<br/>
2  Ng5        Kf4<br/>
3  Ne4        Kf3<br/>
4 Kd4        Kf4<br/>
<p>There is no fight in 4 . . . Kg2 5 Ng5, Kg3 6 Ke3, Kg2 7 Kf4, Kf2 8 Kg4, and White wins.</p>
5 Kd5         Kf5<br/>
<p>Still keeping White's King at bay.</p>
6 Nc3!<br/>
<p>Very subtle! The natural 6 Nf2 leads to 6 . . . Kf4 7 Ke6, Kg3 8 Kf5, Kxf2 9 Kg4, Ke3 10 Kxh4, Kf4 11 Kh5, Kf5 12 Kh6, Kf6 13 Kh7, Kf7 14 h4, Kf8 15 h5, Kf7 16 h6, Kf8, and White must either play 17 Kg6 allowing Black to reach g8 and a draw, or imprison his own King in a humiliating stalemate position.</p>
6 . . .        Kf4<br/>
7 Ne2+        Kf3<br/>
8 Ng1+        Kg2<br/>
9 Ke4        Kxg1<br/>
10 Kf3        Kh2<br/>
11 Kg4        Kg2<br/>
12 Kxh4        Kf3<br/>
13 Kg5        Ke4<br/>
14 h4            Ke5<br/>
15 h5            Ke6<br/>
16 Kg6<br/>
<p>White wins, as the Pawn is free and Black can never reach g8, the drawing square.</p>`,
'108': `<p>IT WOULD appear that Black has at least a draw, since White cannot hold on to his solitary Pawn—but White has hidden resources!</p>
1 Ng2!        hxg3+<br/>
<p>The alternative is 1 . . . Kh2 2 Nxh4, Kh3 3 Nf5, h5 4 Kgl, h4 (unfortunately forced) 5 gxh4, and the Rook Pawn marches up the board to Queen.</p>
2 Kg1        h5<br/>
3 Kh1        h4<br/>
4 Nf4#<br/>`,
'109': `1 Kd7!<br/>
<p>BLOCKING the Pawn—a strange winning move! White does not advance the Pawn immediately, as after 1 d7, Bc6 followed by 2 . . . Bxd7 draws the position.</p>
1 . . .         Kd5<br/>
2 Kc7<br/>
<p>Now threatening 3 d7.</p>
2 . . .        Bc6<br/>
3 Ne4!<br/>
<p>Black is in Zugzwang. He loses because he is compelled to move.  He has these choices:</p>
<p>A]    3 . . . Kxe4 4 Kxc6, and the Pawn Queens.</p>
<p>B]    3 . . . Be8 4 Nf6+ winning the Bishop.</p>
<p>C]     3 . . . Bb5 4 Nc3+, Kc5 5 Nxb5, Kxb5 6 d7, winning.</p>
<p>D]     3 . . . Ba4 4 Nc3+ and 5 Nxa4.</p>
<p>White wins</p>`,
'110': `1 Nf5        Ba8<br/>
<p>OBVIOUSLY, if 1 . . . Bc8 2 Ne7+ followed by 3 Nxc8 wins for White.</p>
2 Nd4+        Kc5<br/>
3 Ne6+        Kc6<br/>
<p>The only move, since the King must stay near the Pawn, and 3 . . .  Kb5 loses by 4 Nc7+.</p>
4 Nc7         Bb7<br/>
5 Nd5!<br/>
<p>Leaves Black without resource. On   5 . . . Kxd5 (or any other move by the King) the reply 6 Kxb7 wins for White. Should Black try 5 . . . Bc8, then 6 Ne7+, Kd7 7 Nxc8, Kxc8 8 b7+ compels resignation and</p>
<p>White wins</p>`,
'111': `1 Nc6<br/>
<p>SHUTS off the Bishop's action on the long diagonal so that the Pawn may march through. The Pawn now threatens to reach b7 safely.</p>
1 . . .        Bf1<br/>
2 b6        Ba6<br/>
3 Kd6        Bb7<br/>
<p>If the King tries to help by 3 . . . Ke3, then 4 Kc7, Ke4 5 Nb4 evicts the Bishop, enabling the Pawn to advance next move.</p>
4 Kc7        Ba8<br/>
5 Nd8        Ke3<br/>
<p>On 5 . . . Bf3 6 Nc6 shuts the Bishop out permanently, assuring the Pawn of Queening in two more moves.</p>
6 Nb7<br/>
<p>Brutal but necessary. The Bishop is imprisoned.</p>
6 . . .         Kd4<br/>
7 Kb8        Kd5<br/>
<p>Unfortunately for Black, his King may not move to c5 attacking the Pawn.</p>
8 Kxa8         Kc6<br/>
9 Ka7<br/>
<p>White wins</p>`,
'112': `<p>WHITE plans to maneuver his Knight to b7, shutting off the Bishop, and then promote his Pawn. White's object is clear, but he must time his moves right to accomplish it.</p>
1 Na5<br/>
<p>The plausible try 1 Kb8, Kd8 2 Na5 (threatening 3 Nb7+ followed by advancing the Pawn) fails after 2 . . . Ba8! 3 Kxa8, Kc7 4 Nc4, Kc8 5 Nd6+, Kc7 6 Nb5+, Kc8 due to the fact that the Knight cannot gain a move.</p>
1 . . .        Ba8<br/>
<p>White was threatening to shut off the Bishop by 2 Nb7 or 2 Nb6+.</p>
2 Kc8!<br/>
<p>Gaining a move for the final maneuver—something the Knight cannot do. If at once 2 Kb8, Kd8 3 Nb7+, Kd7 4 Kxa8, Kc8 5 Nd6+, Kc7 6 Ne8+, Kc8, and the stubborn King cannot be ousted.</p>
2 . . .        Kd6<br/>
3 Kb8        Kd7<br/>
4 Nb7<br/>
<p>Black's King needs a waiting move (so that 5 Kxa8 can be met with</p>
5 . . . Kc8) but he has none!<br/>
4 . . .        Kc6<br/>
5 Kxa8        Kc7<br/>
6 Nd6!<br/>
<p>Prevents Black from moving to c8, and enables his own King to emerge.</p>
6 . . .        Kxd6<br/>
7 Kb7<br/>
<p>White wins</p>`,
'113': `<p>AN INTERESTING duel between Knight and Bishop.</p>
1 Nb7+        Kb4<br/>
<p>The other defenses lead to the following play:</p>
<p>A] 1 . . . Kc6 2 Nd8+, Kb5 (on 2 . . . Kb6, or Kd5 3 Ne6 followed by Queening with check wins, while 2 . . . Kc5 3 Ne6+ costs the Bishop) 3 Ne6, Bg3 4 Kf6, Bh4+ 5 Ng5 wins.</p>
<p>B] 1 . . . Kc4 2 Nd6+, Kd5 3 Kf6! Bg3 4 Kg5 wins. A beautiful variation.</p>
<p>C] 1 . . . Kb6, d5 or d4 2 d8=Q+ wins.</p>
2 Nd6        Be3<br/>
<p>On 2 . . . Bg5+ 3 Ke8, and White will then play 4 Nf5 followed by 5 Ne7, blocking the Bishop's action on the diagonal.</p>
<p>Black's actual move leaves the possibility of checking at g5 open, as well as the opportunity of shifting to another diagonal via b6.</p>
3 Nc8        Bf4<br/>
<p>Kept out of b6, the Bishop heads for c7.</p>
4 Nb6!<br/>
<p>Refutes 4 . . . Bc7 by 5 Nd5+ winning the Bishop, and 4 . . .  Bg5+ by 5 Ke8, Kb5 6 Nc8 followed by 7 Ne7 shutting out the Bishop.</p>
4 . . .         Kc5<br/>
<p>After all the fencing, the position is almost identical with the opening scene.</p>
5 Nd5!<br/>
<p>White wins. If 5 . . . Kxd5 6 d8=Q+, (emphasize Pawn Queens with check), while on 5 . . . Bg5+ 6 Nf6 is decisive.</p>`,
'114': `<p>A PRETTY tactical device in Pawn endings is the forcible displacement of a piece that prevents your Pawn from moving up the board.</p>
<p>A simple and pleasing example:</p>
1 Ng7+!    Nxg7<br/>
<p>On 1 . . . Kf7 instead, 2 Nxf5, Kf6 3 h6 wins for White. The Pawn and Knight stay where they are until the King comes up and helps.</p>
2 h6                 Kf7<br/>
3 h7<br/>
<p>Certainly not the greedy 3 hxg7, when 3 . . . Kxg7 drawing is fit retribution. </p>
<p>White wins</p>`,
'115': `<p>BEFORE the Pawn can advance, Black's Knight must be driven off and kept out of active play.</p>
1 Nd2    Kg7<br/>
2 Nc4<br/>
<p>Forces Black's Knight away from the center of action.</p>
2. . .                    Nb1<br/>
<p>On 2 . . . Nc2 3 b5, Ne1 4 b6, Nd3+ 5 Kb5, Nf4 6 b7 leaves Black helpless.</p>
3 Kd4!<br/>
<p>Not at once 3 b5 as 3 . . . Nc3 attacks the Pawn, and after 4 b6, Na4+ 5 Kc6, Nxb6 captures it and draws.</p>
3 . . .    Kf7<br/>
<p>For the moment Black's Knight is out of business.</p>
4 b5    Ke7<br/>
5 b6    Kd7<br/>
6 Kc5    Nc3<br/>
7 Ne5+        Kc8<br/>
<p>Black has no time to attack the Knight as after 7 . . . Ke6 8 b7, Na4+ 9 Kb4 wins.</p>
8 Kc6        Ne2<br/>
9 b7+        Kb8<br/>
10 Kb6<br/>
<p>White mates on next move with Nd7.</p>`,
'116': `1 Ka7!<br/>
<p>A SUBTLE winning move. The natural 1 Kb8 leads to 1 . . . Kb5 2 Nb4 (2 a7, Nc6+ wins the Pawn) Nc6+ 3 Kb7 (3 Kc7, Nxb4 4 a7, Nd5+ followed by 5 . . .  Nb6 draws) Na5+ 4 Ka7, Kxb4 5Kb6, Nc4+ 6 Kc7, Ka5 7 a7, Nb6 and Black draws.</p>
1 . . .    Kb5<br/>
<p>If 1 . . . Nc6+ 2 Kb6, Kd5   (or 2 . . . Ne7 3 Kb7) 3 Nb4+, Nxb4 4 a7 and wins, or if 1 . . . Kb5 2 Nb4! (a pretty sacrifice to prevent the King coming closer) Kxb4 3 Kb6, and White wins.</p>
2 Nb4!    Ka5<br/>
<p>If 2 . . . Kxb4 3 Kb4 wins, or if 2 . . . Kc5 3 Kb8, Kxb4 4 Kc7 (certainly not 4 a7, Nc6+ followed by 5. . . Nxa7) Ne6+ 5 Kb6, and the Pawn cannot be stopped.</p>
3 Kb8        Nc6+<br/>
4 Kb7        Nd8+<br/>
5 Kc7        Ne6+<br/>
6 Kb8        Nc5<br/>
<p>On 6 . . . Kb6 7 a7, Nc7 8 Nd5+ wins.</p>
7 a7        Nd7+<br/>
8 Kc7        Nb6<br/>
9 Kb7        Kb5<br/>
10 Nd5<br/>
<p>White wins. Black's Knight must not move and dares not stay. A full-bodied instructive Réti composition.</p>`,
'117': `<p>WHITE must draw Black's Knight away from its post, so that his Pawn may advance and Queen.</p>
1 Ne6<br/>
<p>Intending to attack the Knight by 2 Nf8.</p>
1 . . .    Kd5<br/>
<p>Vacates c6 for later occupation by his Knight.</p>
2 Nf8        Ne5<br/>
3 Ka8<br/>
<p>Clearly not 3 b8=Q, Nc6+, and the newly-crowned Queen comes off the board.</p>
3 . . .         Nc6<br/>
4 Nd7        Ke6<br/>
<p>If 4... Kd6 5 Nb6, Kc7 (on 5... Kc5 6 Nc8 followed by 7 Na7 wins) 6 Nd5+, Kd6 7 Nb4 wins for White.</p>
5 Nb6        Kd6<br/>
6 Nc8+        Kc7<br/>
7 Na7        Nb8<br/>
8 Nb5+        Kb6<br/>
9 Kxb8<br/>
<p>White wins</p>`,
'118': `1 Nf6<br/>
<p>TO PREVENT a perpetual check draw by 1 . . . Nd7+ 2 Ka8, Nb6+ 3 Kb8, Nd7+ 4 Kc8, Nb6+ etc.</p>
1 . . .                    Na8!<br/>
<p>A clever defense. If Black had played 1 . . . Kc5, then 2 Kb7, Kb5 3 Nd5 evicts the Knight (from holding back the Pawn) and wins.</p>
2 Nd5!<br/>
<p>A fine reply. White avoids 2 Kxa8, Kc7 3 Nd5+, Kc8 4 Ne7+, Kc7, and Black draws, the Knight being unable to gain a move to dislodge Black's King.</p>
2 . . .        Kd7<br/>
<p>Ready to meet 3 Kxa8 with 3 . . . Kc8, and Black draws.</p>
3 Kb7<br/>
<p>Restricts Black to one move by his King, since his Knight may not come out.</p>
3 . . .        Kd8<br/>
<p>The only move to keep in touch with the square c8. On 3 . . . Kd6 instead, White replies 4 Kxa8 fol-lowed by 5 Kb8, winning.</p>
4 Nb6        Nc7<br/>
5 Kc6<br/>
<p>White wins</p>
<p>Black must either move his King, losing the Knight, or move the Knight and allow White's Pawn to Queen.</p>`,
'119': `<p>A REWARDING ending where the variations are as brilliant as the main play.</p>
1 Kg5!<br/>
<p>Moving in on the Knight. Straightforward attack by 1 Kf5 leads to this: 1 . . . Ka7! 2 Kf6 (or 2 Nd7, Nxd7 3 e6, Nb6 4 e7, Nc8 5 e8=Q, Nd6+ and Black wins the Queen) Kb6 3 Kg7, Kxc5 4 Kxf8, Kd5, and Black captures the Pawn and draws. Or   1 Kf5, Ka7 2 Kg5, Kb6 3 Nd7+, Nxd7 4 e6, Nc5 5 e7, Ne6+ 6 Kf6, Nc7, and the Pawn can never move on to Queen.</p>
1 . . .               Ka7<br/>
2 Kf5!<br/>
<p>The natural attack 2 Kh6 is met by 2 . . . Kb6 3 Nd7+ (if 3 Kg7, Kxc5 draws) Nxd7 4 e6, Nf6 5 Kg6 (5 e7, Ng8+) Nd5 and Black draws.</p>
2 . . .        Kb6<br/>
<p>If Black returns instead by 2 . . . Kb8, then 3 Kf6, Kc8 (or 3 . . . Nh7+ 4 Kg6, Nf8+ 5 Kg7, and the Knight is magnificently trapped) 4 Kg7, Nd7 5 Nxd7, Kxd7 6 Kf7, and the Pawn will Queen.</p>
3 Nd7+!    Nxd7<br/>
4 e6        Nc5<br/>
<p>If 4 . . . Kb7 5 e7 followed by 6 e8=Q wins.</p>
5 e7        Nb7<br/>
<p>A last flicker of hope. If White precipitately Queens his Pawn then</p>
6 . . . Nd6+ removes the Queen.<br/>
6 Ke5<br/>
<p>White wins</p>`,
'120': `<p>THERE is classic economy in this pleasing example of persuasion exerted on Black's Knight to abandon his important post.</p>
1 f6        Nf2+<br/>
2 Kg2        Nd3<br/>
3 f7        Nf4+<br/>
4 Kh2<br/>
<p>In order later to restrict the moves of Black's King.</p>
4. . .        Ng6<br/>
<p>The Pawn is stopped, but White has a counter-combination.</p>
5 Nf3+        Kg4<br/>
6 Ne5+!        Nxe5<br/>
7 f8=Q<br/>
<p>White wins</p>`,
'121': `<p>GALLOPING furiously after the passed Pawn, Black's Knight heads it off just in time—or does he?</p>
1 f5        Ne3<br/>
2 f6        Nf5<br/>
3 f7        Ne7+<br/>
4 Kb7        Ng6<br/>
<p>The Pawn is stopped, but now comes. . . .</p>
5 Nxe5<br/>
<p>Ready to reply to 5. . . Nxe5 with 6 f8=Q and White wins, or if Black plays 5 . . . a3, then the continuation is 6 Nxg6, a7 7 f8=Q, a1=Q, 8 Qa8+ will remove Black's Queen.</p>
5 . . .        Nf8<br/>
6 Nc6#!<br/>`,
'122': `<p>WHITE'S first move is obvious, but how will his King hide from all the checks?</p>
1 bxa7        Rb3+<br/>
2 Kc7        Rc3+<br/>
3 Kd7<br/>
<p>The King must not leave the sev-enth rank. If for example 3 Kd6, Rc8 solves Black's problems, or if 3 Kd8, Rxh3, and White does not dare Queen his Pawn.</p>
3 . . .        Rd3+<br/>
4 Ke7        Re3+<br/>
5 Kf7        Rf3+<br/>
6 Kg7        Rg3+<br/>
7 Ng5!<br/>
<p>Chess players are generous!</p>
7 . . .     .   Rxg5+<br/>
<p>Now the Rook is closer, which is the purpose of White's sacrifice.</p>
8 Kf7        Rf5+<br/>
9 Ke7        Re5+<br/>
10 Kd7        Rd5+<br/>
11 Kc7        Rc5+<br/>
12 Kb7        Rb5+<br/>
13 Kc6!<br/>
<p>White wins. The Rook has no more checks, and cannot return to the first rank.</p>`,
'123': `<p>WHITE is a whole piece ahead, but how does he win? Moving closer with his King stalemates Black, and meaningless Knight moves do not force the win.</p>
<p>Clearly, giving up the Knight will break through, but the sacrifice must be timed right. If for example 1 Nxh6, g7xN 2 Kf6, Kg8 3 g7, Kh7 4 g8=Q+ (4 Kf7 stalemates Black) Kxg8 5 Kg6, and White can win the remaining Pawn but not the ending.</p>
1 Nd6    Kg8<br/>
2 Ne8    Kh8<br/>
3 Nf6!<br/>
<p>Leaves no choice.</p>
3 . . .            gxf6<br/>
4 Kf7            f5<br/>
5 g7+            Kh7<br/>
6 g8=Q#<br/>`,
'124': `<p>HOW does White win? He can Queen his advanced Pawn, but so can Black.</p>
1 Nb4+!        axb4<br/>
2 e7        d2<br/>
3 e8=Q        d1=Q<br/>
4 Qc6+        Ka5<br/>
5 Kb7!<br/>
<p>Threatens mate on the move. </p>
5 . . .        Qd3<br/>
<p>The alternative 5. . . b3 is answered by 6 a3, and Black is faced with an additional threat of mate in two by 7 Qc5+, Ka4 8 Qb4#.</p>
6 Qb6+         Ka4<br/>
7 Qa7+        Kb5<br/>
8 Qa6+<br/>
<p>White wins the Queen and the game.</p>`,
'125': `1 b7             Nd6+<br/>
2 Kd4!<br/>
<p>NOT at once 2 Kd5, as after 2 . . . Nxb7 3 e7, Kf7, Black has a draw.</p>
2 . . .        Nxb7<br/>
3 Kd5<br/>
<p>The difference is that Black is now confined to two plausible defenses.</p>
3 . . .        Kg7<br/>
<p>Moving away from the Pawn, but if he makes the only move open to his Knight then this happens: 3 . . . Nc5 4 e7, Na6 5 Kd6 (of course not 5 e8=Q, Nc7+ winning the Queen) Kf7 6 Nd8+, Ke8 7 Ne6, Kf7 8 Ng7, Nc7 9 Kd7, Kf6 10 Ne8+, Nxe8 11 Kxc7 and White wins.</p>
4 Nd8!        Nxd8<br/>
5 e7<br/>
<p>White wins</p>`,
'126': `<p>BLACK is so busy warding off at-tacks on his Knight, and coping with the passed Pawns, that he overlooks a greater danger—that of being checkmated!</p>
      1 Ke7        Nh7<br/>
<p>Black can try to capture the Pawns, in which case the play would run:  1 . . . Kg5 2 Kxf8, Kxh5 3 Kg7, Kg4 4 Ne4, Kf3 5 Kg6, Kg4 6 Kf6, Kf3 7 Kf5 and White wins.</p>
    2 Kf7        Kg5<br/>
<p>The alternative is 2 . . . Nf6 when 3 h6, Kg5 (on 3 . . . Ke5 4 Nd7+ wins) 4 Ne4+, Nxe4 5 h7 wins for White.</p>
    3 Ne4+        Kxh5<br/>
    4 Kg7        Ng5<br/>
    5 Nf6#<br/>`,
'127': `1 g6        Kf6<br/>
2 g7        Kf7<br/>
3 Nd5<br/>
<p>THREATENS to win by 4 Nf6 followed by 5 g8=Q+.</p>
3 . . .        Ne6<br/>
<p>Other defenses are:</p>
<p>A] 3 . . . Nd7 (or h7) 4 Ne7, Nf6 5 g8=Q+, Nxg8 6 h7 and wins.</p>
<p>B] 3 . . . Ng6 4 Nf6, Ne7 5 g8=Q+, Nxg8 6 h7 and wins.</p>
4 Ne7        Nxg7<br/>
5 h7!<br/>
<p>White wins</p>`,
'128': `<p>ONLY two moves are needed to win, but they are enough to force Black into zugzwang. Zugzwang is the compulsion to move—and lose.</p>
1 Nd4+     Kc5<br/>
<p>On 1 . . . Kb7 instead, the continuation is 2 Kxh2, Ka6 3 Nb3, Bf4+ 4 Kh3, Kb5 5 Kg4, Bb8 6 f4, Kb4 7 f5, Kxb3 8 f6, Kb4 9 f7, Bd6 10 a6, and White wins, the Bishop being outdistanced by the Pawns.</p>
2 Kh1!<br/>
<p>White wins! There are no threats, and if Black could pass nothing could happen to him. But zugzwang—the compulsion to move when it's one's turn to move—has him in its grasp, and he is lost. The proof: If</p>
<p>A] 2 . . . Bf8 3 Ne6+ wins the Bishop.</p>
<p>B] 2 . . . Bg7 3 Ne6+ wins the Bishop.</p>
<p>C] 2 . . Bg5 3 Ne6+ wins the Bishop.</p>
<p>D] 2 . . . Bf4 3 Ne6+ wins the Bishop.</p>
<p>E] 2 . . . Bd2 3 Nb3+ wins the Bishop.</p>
<p>F] 2 . . . Bc1 3 Nb3+ wins the Bishop.</p>
<p>G] 2 . . . Kd6 3 Nf5+ wins the Bishop.</p>
<p>H] 2 . . . Kd5 3 a6, and the passed Pawn becomes a Queen.</p>`,
'129': `1 c6<br/>
<p>BEFORE starting his Rook Pawn, White blocks the long diagonal.</p>
1 . . .             dxc6<br/>
2 a6          Bf3<br/>
<p>If 2. . . c5 3 Ne5 prevents the Bishop from getting on the        diagonal.</p>
3 Ng5          Bd5<br/>
4 Ne6          c5<br/>
<p>Black may not bring his King closer, as after 4 . . . Kd7 5 Nc5+, Kc7 6 a7 leaves him helpless.</p>
5 Nc7+    Kd7<br/>
6 Nxd5    Kc8<br/>
<p>On 6. . . Kc6 7 Kg2, c4 8 Kf2, c3 9 Ke3, and White overtakes the Pawn.7 Nb6+    Kb8</p>
<p>Forced, as 7. . . Kc7 allows 8 a7 followed by Queening.</p>
8 Nd7+    Ka7<br/>
9 Nxc5<br/>
<p>White wins. His King simply comes up the board and escorts the Pawn to the Queening square.</p>`,
'130': `1 c5<br/>
<p>THREATENING to win by 2 c6, bxc6 3 b7.</p>
1 . . .         Bb1<br/>
2 Ne6!<br/>
<p>A beautiful sacrifice as we will soon see.</p>
<p>Ready to circumvent 2 . . . Be4 by 3 Ng5+, Kf4 4 Nxe4, Kxe4</p>
5 c6, etc.<br/>
2 . . .        fxe6<br/>
3 c6        Be4<br/>
4 c7<br/>
<p>White wins</p>`,
'131': `1 f7        Rxa6+<br/>
2 Nf6        Ra8<br/>
3 Ne8        Ra6+<br/>
4 Kg5<br/>
<p>THE King must find a way to evade the Rook's checks. He may not move to the seventh rank, as after 4 Kg7 for example, 4 . . . Ra7 followed by sacrificing the Rook for the Pawn, draws. Nor may he move to the Bishop file, as after 4 Kf5, Ra1 followed by 5 . . . Rf1 (with or without check) draws for Black.</p>
4 . . .         Ra5+<br/>
5 Kg4         Ra4+<br/>
6 Kg3         Ra3+<br/>
7 Kf2         Ra2+<br/>
8 Ke3         Ra3+<br/>
<p>Now we go up the board.</p>
9 Ke4        Ra4+<br/>
10 Ke5        Ra5+<br/>
11 Ke6        Ra6+<br/>
12 Kd7        Ra7+<br/>
13 Nc7<br/>
<p>White wins, as the Rook has no more checks and cannot stop the Pawn.</p>`,
'132': `1 b7        Rf8<br/>
2 Nb4+        Ke4<br/>
<p>BLACK plays to capture or render impotent the King Knight Pawn. Moving to the Queen side instead would lead to this: 2 . . . Kc4 3 Nc6, Kc5 4 b8=Q, Rxb8 5 Nxb8, Kd5 6 g4, Ke5 7 g5, Kf5 8 Nd7, Kf4 9 Nf6 and White wins.</p>
3 Nc6        Kf4<br/>
<p>Hoping for this: 4 b8=Q, Rxb8 5 Nxb8, Kg3, and Black captures the Pawn next move and draws.</p>
4 g4!        Kxg4<br/>
<p>What else is there? Black has prevented 5 g5 or allowing 6 b8=Q+, and if he tries 4 . . . Rf6+ (instead of 4 . . . Kxg4) then 5 Kg7 (not 5 Kxh7 which is refuted by 5 . . . Rf7+, and White loses the ambitious Queen Knight Pawn) Rg6+ 6 Kxh7 and White wins.</p>
5 Kg7        Re8<br/>
<p>The only square open along the rank.</p>
6 Kf7        Rh8 <br/>
<p>Once again the only square left.</p>
7 Ke7!<br/>
<p>Threatens 8 Nd8, cutting off the Rook, after which the Pawn could advance.</p>
7 . . .        Rg8<br/>
8 Nd8    Rg7+<br/>
<p>If White should now get out of check by moving his King, the reply 9 . . . Rxb7 would draw easily, the Knight alone being unable to force mate.</p>
9 Nf7        Rg8<br/>
<p>But now the Rook returns to the first rank. Does Black get a draw after all?</p>
10 Nh6+<br/>
<p>Certainly not! The Knight fork wins the Rook and the game.</p>`,
'133': `<p>WHITE cannot save his stranded Knight, but he can close in and cap-ture the badly-placed Bishop in return. At the critical moment though, he must find the pretty surprise move that turns an apparent draw into a win.</p>
1 Kg4        Kc8<br/>
2 Kh5        Kd8<br/>
3 Ng7!        Bxg7<br/>
4 h8=Q+!<br/>
<p>Unexpected, and the only way to win. If instead 4 Kg6, Bh8 5 Kf7, Kd7 6 Kg8, Ke7 7 Kxh8, Kf7, and White is stalemated.</p>
4 . . .        Bxh8<br/>
5 Kg6        Ke7<br/>
6 Kh7        Kf7<br/>
7 Kxh8        Kf8<br/>
8 Kh7        Kf7<br/>
9 Kh6        Kf8<br/>
10 Kg6        Ke7<br/>
11 Kg7        Ke8<br/>
12 Kxf6        Kd8<br/>
13 Ke6        Ke8<br/>
14 f6        Kf8<br/>
15 f7        Kg7<br/>
16 Ke7 <br/>
<p>White wins</p>`,
'134': `<p>A LONE Bishop can mate—if the King is imprisoned by his own friends!</p>
1 Kc7        a3<br/>
2 Ba4        a2<br/>
3 Kc6        a1=Q<br/>
<p>The Pawn must push on and become a Queen (or some other piece) though the enemy is closing in on his King.</p>
4 Bb5#<br/>`,
'135': `<p>BISHOP and Rook Pawn win easily against the lone King if the Bishop controls h8, the Queening square. If the Bishop is the wrong color, as in the diagrammed position, the win can only be attained if the adverse King is kept out of the corner square. Once he reaches that square, a win is impossible.</p>
1 h6        Kf7<br/>
2 Bh7!<br/>
<p>To prevent 2 . . . Kg8 followed by 3 . . . Kh8, which would assure Black of a draw.</p>
2 . . .        Kf6<br/>
3 Kf4        Kf7<br/>
4 Kf5        Kf8<br/>
5 Kf6        Ke8<br/>
6 Bf5        Kf8<br/>
7 h7        Ke8<br/>
8 h8=Q#<br/>`,
'136': `<p>AGAINST a Rook Pawn and a bad Bishop (one that does not control the Pawn's Queening square) Black can draw if his King can reach the corner square.</p>
<p>White's play to win is easily understood once we realize that his purpose is to keep Black's King from reaching g8 or g7, from whence he can move to h8 and the safety of a draw.</p>
2 h6        Kf6<br/>
3 Bf5!<br/>
<p>To prevent 3 . . .  . Kg6 attacking the Pawn.</p>
3 . . .        Kf7<br/>
<p>Now threatening to move to g8, and a sure draw.  Not so fast!</p>
4 Bh7!        Kf6<br/>
5 Kf4        Kf7<br/>
6 Kf5        Kf8<br/>
7 Kf6        Ke8<br/>
8 Bf5        Kf8<br/>
<p>White mates in two moves, e.g.</p>
9 h7        Ke8<br/>
10 h8=Q#<br/>`,
'137': `<p>CAN White overtake the Rook Pawn?</p>
1 Kf7        h5<br/>
2 Ke6<br/>
<p>But not 2 Bf6 as 2 . . . Kb3 3 Kg6, h4 4 Bxh4, Kxb2 and Black has a draw.</p>
2 . . .        h4<br/>
<p>This time if Black had played 2 . . . Kb3, 3 Kf5 would close in on the Pawn.</p>
3 Kd5<br/>
<p>Ready to meet 3 . . . Kb3 with    4 Ke4 and the Rook Pawn is doomed.</p>
3 . . .        h3<br/>
<p>But this certainly looks good!</p>
4 Kc4!        h2<br/>
5 Bb4        h1=Q<br/>
6 b3#!<br/>
<p>And not a moment too soon.</p>`,
'138': `1 a7<br/>
<p>WHITE can try to prevent Black from Queening his Pawn, but after 1 Bc3, Kc8 2 Be5 (to stop 2 . . .  Kb8 when Black has a certain draw) b2 3 Bxb2 Kb8, and White cannot possibly force a win.</p>
1 . . .        b2<br/>
2 a8=Q        b1=Q<br/>
<p>With Black's King and Queen so far apart from each other, it seems incredible that the Queen will either be lost or the King driven into a cul-de-sac in a half-dozen moves.</p>
3 Qb7+        Ke6<br/>
<p>If 3 . . . Ke8 4 Qe7#, or if 3 . . . Kd8 4 Be7+, discovering an attack on the Queen.</p>
4 Qe7+        Kd5<br/>
<p>The alternative is 4 . . . Kf5   5 Qh7+ winning the Queen.</p>
5 Qd6+        Kc4<br/>
<p>Here if 5 . . . Ke4 6 Qg6+ wins the Queen.</p>
6 Qc5+        Kb3<br/>
7 Qc3+        Ka2<br/>
8 Qa3#<br/>`,
'139': `<p>IT IS clear that Black can draw if his King reaches a8, since White has a Rook Pawn and his Bishop does not control the Pawn's Queening square. How does White keep the King out? If he plays the natural 1 Bc5, the continuation would be 1. . . Kf7 2 a4, Ke6 (but not 2. . . Ke8 3 a5, Kd8 4 Bd6, Kc8 5 a6, Kd8 6 a7 and White wins) 3 a5, Kd5 4 a6, Kc6 5 Kg2, Kc7 (aiming for the square b8 and a sure draw) 6 Ba7, Kc6 (threatens to win the Pawn) 7 Bb8, Kb6 8 a7, Kb7, and White must concede the draw.</p>
1 Bb4!<br/>
<p>A subtle move, whose purpose will shortly be manifest.</p>
1 . . .         Kf7<br/>
2 a4        Ke6<br/>
3 a5        Kd5<br/>
4 a6        Kc6<br/>
5 Ba5!<br/>
<p>Prevents 5. . . Kc7, and closes all the roads leading to Black's a8.</p>
5 . . .         d5<br/>
6 Kg2        d4<br/>
7 Kf3        d3<br/>
8 Ke3        Kd7<br/>
<p>The King has nothing left but retreat.</p>
9 a7<br/>
<p>White wins</p>`,
'140': `<p>BEFORE Black can be subdued, his King must be prevented from reaching the corner square (a8), and his remaining Pawn captured.</p>
1 Bc5        Ka5<br/>
2 Kb7        Kb5<br/>
3 Bb6!<br/>
<p>Forces Black to move down the board.</p>
3 . . .         Kc4<br/>
4 Kc6        Kb3<br/>
<p>Black can try a roundabout route to a8, with this result: 4 . . . Kd3 5 Kb5, Ke4 6 Kxa4, Kd5 7 Kb5, Kd6 8 Ka6, Kc6 9 a4, Kd7 10 Kb7, and Black is kept out - with plenty of protection for a Pawn Queening.</p>
5 Bc5        Kc4<br/>
6 Bd6        Kd4<br/>
7 Kb5        Kd5<br/>
8 Bh2        Ke6<br/>
9 Kxa4    Kd7<br/>
10 Kb5        Kc8<br/>
11 Kc6<br/>
<p>White wins</p>`,
'141': `1 Bd4!<br/>
<p>NOT at once 1 c8=Q, as Black replies by Queening with check.</p>
1 . . .     g1=Q<br/>
<p>Black cannot play 1 . . . Kxd4 as after 2 c8=Q, g1=Q 3 Qc5+ forfeits his newly-crowned Queen.</p>
2 Bxg1    a2<br/>
<p>Now this Pawn looks dangerous!</p>
3 Bd4!<br/>
<p>Obviously, if White had played 3 c8=Q instead, then 3 . . . a1=Q would have drawn for Black.</p>
3 . . .         Kxd4<br/>
4 c8=Q        a1=Q<br/>
5 Qh8+<br/>
<p>White wins the Queen and the game.</p>`,
'142': `<p>WHITE must do something about the menacing Rook Pawn, but after the plausible 1 Bb1, h4 2 Bf5, d6 3 Bh3, Kd3 4 Bf1+, Kd4 5 Kb5, Kc3 6 Kc6, h3 7 Kd5 (or 7 Kxd6, h2 8 Bg2, Kxc4 and a draw) h2 8 Bg2, Kd3, he can capture the Queen Pawn only at the expense of his own Pawn. Therefore:</p>
1 c5!        h4<br/>
2 Be6!<br/>
<p>A bit of generosity saves miles of analysis.</p>
2 . . .        dxe6<br/>
3 c6        h3<br/>
4 c7        h2<br/>
5 c8=Q        h1=Q<br/>
6 Qc3+        Kd5<br/>
7 Qc5+        Ke4<br/>
8 Qc6+<br/>
<p>White wins the Queen and the game.</p>`,
'143': `<p>WHITE must retain his Pawn in order to win. He must prevent something like this happening: 1 . . . c3 2 bxc3, Kc4, and his invaluable Pawn comes off the board, enabling Black to draw.</p>
1 Bg1+        Kb4<br/>
2 Bd4        Kb3<br/>
3 Bc3        b4<br/>
4 Kd4!<br/>
<p>But not 4 Bd4, c3, and Black forces the draw.</p>
4 . . .        b xc3<br/>
5 bxc3        Ka4<br/>
6 Kxc4<br/>
<p>White wins</p>`,
'144': `<p>ORDINARILY, Black could move his King to the corner and draw easily against a Rook Pawn and a Bishop of the wrong color. White wins the position though, by effecting a change of identity in his impotent Rook Pawn!</p>
1 Kc6        Ka8<br/>
<p>If Black plays 1 . . . Ka6 instead, there comes 2 Be3, Ka5 3 Bc5, Ka6 4 Bb6, b4 5 axb4, a3 6 b5#.</p>
2 Kb6!<br/>
<p>White does not blunder into 2 Kxb5? after which there is no possible way to win.</p>
2 . . .        b4<br/>
3 axb4<br/>
<p>But now the Rook Pawn has been transformed into a Knight Pawn!</p>
3 . . .        a3<br/>
4 b5        a2<br/>
5 Be5        a1=Q<br/>
6 Bxa1    Kb8<br/>
7 Be5+    Ka8<br/>
8 Kc7        Ka7<br/>
9 b6+<br/>
<p>White wins</p>`,
'145': `<p>BLACK has a wicked-looking Rook Pawn, but an alert sacrifice renders it harmless.</p>
1 Bf3+        Kg1<br/>
2 Bh1!        Kxh1<br/>
3 Kf1        d5<br/>
4 exd5        e4<br/>
5 d6        e3<br/>
6 d7        e2+<br/>
7 Kxe2        Kg1<br/>
8 d8=Q        h1=Q<br/>
<p>Black gets his Queen after all, but will never have a chance to move it.</p>
9 Qd4+<br/>
<p>Care must be taken in checking. Such a move as 9 Qg5+ for example allows Black to interpose his Queen with check, forcing a draw, i.e. 9 . . .  Qg2+.</p>
9 . . .        Kh2<br/>
10 Qh4+        Kg2<br/>
<p>On 10 . . . Kg1 11 Qf2#.</p>
11 Qg4+        Kh2<br/>
12 Kf2<br/>
<p>White wins</p>`,
'146': `<p>BLACK is a piece behind, but his passed Pawns on both sides of the board can be a worry to a Bishop.</p>
1 Bb1!<br/>
<p>Stops the dangerous-looking Rook Pawn from moving on.</p>
1        f4<br/>
<p>Or the following: 1 . . . Kb3 2 Kc6, Kb2 3 d7, Kxb1 4 d8=Q, a2 5 Qb6+, Ka1 6 Qxa5, Kb2 7 Qb4+, Kc2 8 Qa3, Kb1 9 Qb3+, Ka1 10 Qc2, f4 11 Qc1#.</p>
2 Kc 6        f3<br/>
3 Kc5!<br/>
<p>Threatens mate on the move.</p>
3 . . .        Kb3<br/>
4 d7        f2<br/>
5 d8=Q        f1=Q<br/>
6 Qd5+        Kc3<br/>
<p>Or 6. . . Kb2 7 Qa2+, Kc3 8 Qc2#.</p>
7 Qd4+        Kb3<br/>
8 Qa4+!        Kxa4<br/>
<p>If he refuses the Queen by 8 . . . Kb2, then 9 Qc2+, Ka1 10 Qa2#.</p>
9 Bc2#<br/>`,
'147': `<p>IN THIS battle of Bishop against Knight, White plays to force his opponent into zugzwang.</p>
1 Bf7            Kb5<br/>
<p>The King stays near the Pawn, preventing White from capturing the Knight.</p>
2 Be8+           Ka5<br/>
3 Bd7<br/>
<p>Not 3 Bh5 when Black draws by 3 . . . Ne6+ 4 Kc6, Nd8+ 5 Kc5, Ne6+ 6 Kc6, Nd8+, and Black has a perpetual check- aka draw.</p>
3 . . .           Ka6<br/>
4 Bh3                Ka5<br/>
<p>Black may not move the Knight as after 4 . . . Nb7, White can win the beast either by 5 Bg2 or 5 Bf1+.</p>
5 Bg4<br/>
<p>Still keeping an eye out for the Knight check.</p>
5 . . .           Kb5<br/>
6 Be2+       Ka5<br/>
<p>If 6 . . . Kc5 instead, the reply 7 Bc4 leaves Black helpless.</p>
7 Bc4<br/>
<p>Now we have the diagrammed position, with Black to move. But Black is in zugzwang—he has no moves!</p>
<p>White wins</p>`,
'148': `1 Kg5    Nf2<br/>
2 h4!    Ne4+<br/>
3 Kg6    Nxd6<br/>
<p>IF BLACK refuses the Bishop, then after 3 . . . Nf2 4 h5, Ng4 5 Kg5, the Knight must retreat, since the King can no longer move and still protect it.</p>
4 h5    Nc4<br/>
5 h6    Ne5+<br/>
6 Kg7<br/>
<p>White wins</p>`,
'149': `<p>TO WIN this, Black's Bishop must be driven off either of the two diagonals leading to White's f8, the Queening square of the Pawn.</p>
<p>The first step:</p>
1 Bc3        Ba3<br/>
2 Bg7        Bb4<br/>
3 Bf8<br/>
<p>Moving in front of the Pawn, even though it blocks the Pawn for the time being, to force Black's Bishop to leave the diagonal.</p>
3 . . .        Bd2<br/>
<p>The second step:</p>
4 Bc5        Bh6<br/>
<p>Ousted from one diagonal, the Bishop seizes another, also leading to f8*.</p>
5 Bd4<br/>
<p>Prevents Black from playing 5 . . . Bg7.</p>
5 . . .        Kf5<br/>
<p>Black moves his King, since his Bishop must stay where it is.</p>
6 Bg7<br/>
<p>Now the Bishop moves beside the Pawn, assuring its advance next move.</p>
<p>White wins</p>`,
'150': `<p>IN ORDER that his Pawn advance to e7 (after which it is assured of Queening) White must drive the opposing Bishop off either of the two diagonals leading to that square.</p>
1 Be7<br/>
<p>As in the previous example, White's first step is to move his Bishop in front of the Pawn. This will evict Black's Bishop from one diagonal.</p>
1  . . .        Be3<br/>
2 Bf8        Bg5<br/>
<p>Black of course seizes the other diagonal leading to e7.</p>
3 Bg7        Kd6<br/>
4 Bf6<br/>
<p>The second step: the Bishop moves beside the Pawn to dislodge Black from his occupancy of the critical diagonal.</p>
4 . . .         Bd2<br/>
<p>The alternative, exchanging Bishops, is obviously hopeless.</p>
5 e7<br/>
<p>White wins</p>`,
'151': `<p>TO WIN this, White must do two things: maneuver his King to f7, and dislodge Black's Bishop from the path of the Pawn.</p>
1 Bg5    Bf8<br/>
<p>If 1 . . . Bb2 (or anywhere else on the long diagonal) 2 Bf6 wins instantly.</p>
2 Kf 6 !    Be7+<br/>
<p>Or 2 . . . Kg4 3 Bd2, Bc5 (3 . . . Kh5 4 Kf7, and Black is out of moves) 4 Bc3, Bf8 5 Kf7, Kf5 6 Bd2 and White wins.</p>
3 Kf7    Bf8<br/>
4 Be3<br/>
<p>Black is in zugzwang—he must move, and he has no moves!</p>
<p>White wins</p>`,
'152': `1 Kh7!<br/>
<p>TO PREVENT 1 . . . Kg8, after which Black's King could not be evicted.</p>
1 . . .    Bb2<br/>
<p>Or anywhere else on the long diagonal.</p>
2 Bf4        Bd4<br/>
3 Bh6+        Ke8<br/>
4 Bg7<br/>
<p>Moving in front of the Pawn, the Bishop drives the adverse Bishop off the long diagonal.</p>
4 . . .        Bc5<br/>
<p>The only move, since 4 . . . Be3 is refuted by 5 Bb2 followed by 6 g7, winning.</p>
5 Be5        Bf8<br/>
<p>In accordance with principle, White can now deploy his Bishop to f4, and then h6 alongside the Pawn, but there is a faster win available.</p>
6 Bd6!<br/>
<p>White wins. After 6 . . . Bxd6 7  g7 is decisive.</p>`,
'153': `1 Bg7            Bg5<br/>
<p>IF BLACK tries 1 . . . Bd2, then 2 Bh6, Bc3 3 Bg5, Bg7 (to prevent 4 h6) 4 Be7!, Bc3 5 h6, Bd4 6 Bf6, and White wins.</p>
2 Bh6<br/>
<p>Moving in front of the Pawn to dislodge Black’s Bishop.</p>
2 . . .         Bf6<br/>
<p>If 2 . . . Be7 3 Be3, Bf8 4 Bd4, Kh4 (on 4 . . . Kf4 5 Bg7 is conclusive) 5 Be5, Kg4 6 Bf6, Kf4 7 Bg7, and the Pawn has a clear road ahead.</p>
3 Be3<br/>
<p>Threatening to advance the Pawn.</p>
3 . . .          Bg7<br/>
4 Bg5    Bf8<br/>
5 Bf6    Kf4<br/>
6 Bg7<br/>
<p>White wins</p>`,
'154': `1 Bh4        Kb6<br/>
<p>ON A Bishop move instead, say</p>
1. . . Be5, White continues with<br/>
2 Bf6, Bh2 3 Bd4, Bg3 4 Ba7, Bf4 5 Bb8, Be3 6 Bh2, Ba7 7 Bg1, and wins.<br/>
2 Bf2+        Ka6<br/>
<p>To prevent White from moving his Bishop to a7 and b8, after which it is easy to dislodge the enemy Bishop. For example, if 2. . . Kc6 3 Ba7, Bg3 4 Bb8, Bf2 5 Bh2, Ba7 6 Bg1, and it is done.</p>
3 Bc5!<br/>
<p>Forces the opposing Bishop out of the corner, since his King must stay where it is.</p>
3 . . .         Bg3<br/>
4 Be7        Kb6<br/>
<p>Otherwise, the maneuver 5 Bd8 and 6 Bc7 is decisive.</p>
5 Bd8+        Kc6<br/>
<p>Stops 6 Bc7, but the exposed position of Black's Bishop enables White to gain a tempo.</p>
6 Bh4!<br/>
<p>Had Black played 3 . . . Bf4 earlier, then White's sixth move would have been 6 Bg5, or if 3 . . . Be5, then White's sixth would have been 6 Bf6.</p>
6 . . .         Bh2<br/>
7 Bf2        Kb5<br/>
8 Ba7        Ka6<br/>
9 Bb8        Bg1<br/>
10 Bf4        Ba7<br/>
11 Be3<br/>
<p>White wins</p>`,
'155': `1 Bc6!<br/>
<p>IT IS important to blockade the Pawn. If instead 1 Ke5, c6 2 Bxc6, Kc7 3 Bg2, Na8! 4 Bxa8 (other moves do not affect Black's reply) Kb6     5 Bg2, Kxa7 and Black has a drawn.</p>
1 . . .         Kd8<br/>
2 Kf5!<br/>
<p>The natural move 2 Kf7 (to force 2 . . . Kc8 3 Ke8, and an easy win) is beautifully demolished by the subtle 2 . . . Nc8 (attacking the Pawn) resulting in 3 a8=Q, and stalemate!</p>
<p>Another pitfall is 2 Ke5, when 2 . . . Ke7 gives Black the opposition and a draw.</p>
2 . . .        Ke7<br/>
3 Ke5!<br/>
<p>White seizes the opposition, the objective being to work his King around to b7.</p>
3 . . .        Kf7<br/>
4 Kd4        Ke6<br/>
5 Kc5        Ke7<br/>
<p>It is clear that throughout all this, the Knight must stay rooted to the spot.</p>
6 Bf3        Kd7<br/>
7 Bg4+        Ke7<br/>
8 Kc6        Kd8<br/>
9 Kb7<br/>
<p>Black's position now comes apart. He must not move the Knight, dares not move the Pawn, and should not move his King.</p>
<p>White wins.</p>`,
'156': `<p>THE win seems simple and straightforward—but it is easy to fall headlong into a hidden trap prepared by Black.</p>
1 g5+        Ke7<br/>
2 g6        Ke8<br/>
<p>At this point 99 out of 100 players would move 3 g7, confidently and unhesitatingly, only to be set back on their heels by 3 . . . Bf8 (pinning the Pawn) followed by 4 . . . Bxg6 (sacrificing the Bishop for the precious pawn), the resulting position being a draw.</p>
3 Bd7+!    Kxd7<br/>
<p>White meets other replies with</p>
4 g7.<br/>
<p>White wins</p>`,
'157': `<p>WHITE must not be hasty and move 1 h7, as the reply 1 . . . e4 ruins his winning chances.</p>
1 Ba7!        Ba1<br/>
<p>Naturally, if 1 . . . Bxa7 2 h7 wins for White.</p>
2 Kb1        Bc3<br/>
3 Kc2        Ba1<br/>
4 Bd4!<br/>
<p>A brilliant sacrifice. If Black captures by 4 . . . exd4, then 5 Kd3 blocks the Bishop's path and assures the Rook Pawn of Queening.</p>
4 . . .        Bxd4<br/>
5 Kd3        Ba1<br/>
<p>On 5 . . . Kg5 6 h7, e4+ 7 Kxd4, and the Pawn cannot be over-taken.</p>
<p>After the actual move, White must not play 6 h7, as after 6 . . . e4+ the liberated Bishop will prevent White's Pawn from Queening.</p>
6 Ke4<br/>
<p>White wins, with Black Pawn blocked out, his Pawn cannot be headed off.</p>`,
'158': `<p>THE King is urged to the top of the board, into a crowded position that can only end in mate.</p>
1 Bf2+        Kh5<br/>
2 g4+        Kh6<br/>
3 Kf6        Kh7<br/>
<p>Evidently not relishing 3 . . . Bh7 4 Be3#</p>
4 g5        Kh8<br/>
5 Bd4        Kh7<br/>
<p>Or 5 . . . Bh7 6 Kxf7#.</p>
6 Ba1        Kh8<br/>
7 g6!        fxg6<br/>
<p>If 7 . . . Bh7 8 Kxf7#</p>
8 Kxg6#<br/>`,
'159': `<p>ONLY one piece can stop White's passed Pawn—Black's Bishop. So the Bishop must be persuaded to leave the critical diagonals!</p>
1 e5        Bb7<br/>
2 e6        Bc8<br/>
3 e7        Bd7<br/>
4 Bh3!<br/>
<p>Without a moment's delay! If 4 Kf8 instead, 4. . . c5 wins for Black!</p>
4 . . .        Be8<br/>
5 Kf8        Bh5<br/>
6 Bg4<br/>
<p>But not 6 Be6 (intending 7 Bf7) as Black's reply is 6 . . . f3 giving him a draw.</p>
6 . . .        Bg6<br/>
<p>Still keeping an eye on the Pawn.</p>
7 Bf5+        Bxf5<br/>
8 e8=Q<br/>
<p>White wins</p>`,
'160': `<p>VARIOUS offers are made to decoy Black's rampant Bishop, and one of them must be accepted.</p>
1 c6    Ba4<br/>
<p>If 1 . . . Bd5 2 Bc4 (pins the Bishop) Bxc4 (or 2 . . . g3 3 Bxd5+ and the Knight Pawn is harmless) 3 c7 and White wins.</p>
2 c7    Bd7<br/>
3 Ke7    Bc8<br/>
4 Kd8    Bf5<br/>
<p>On 4 . . . Bb7 5 Bg2, Bxg2 6 c8=Q wins.</p>
5 Bd3    Be6<br/>
6 Bc4    Kf7<br/>
7 c8=Q<br/>
<p>White wins with a fantastic pin at e6.</p>`,
'161': `<p>BEAUTIFUL ending with minimal means.</p>
1 d7        Rh8<br/>
<p>If instead 1 . . . Rg2+ 2 Kf7 (White's moves are intended to keep the Rook from reaching the first rank) Rf2+ 3 Ke7, Re2+ 4 Kd6, and the Rook is out of checks.</p>
2 Kg7        Rb8<br/>
<p>The only square available on the first rank.</p>
3 Bc7 (Domination)<br/>
<p>White wins</p>`,
'162': `1 b7        Rd3+<br/>
<p>THE only way the Rook can get back to the first rank. If Black tries 1 . . . Rf5+, then 2 Be5, Rf8 3 Bd6+ wins the Rook.</p>
2 Ke6!    Rd8<br/>
3 Bc7    Rh8<br/>
4 Be5    Rd8<br/>
<p>If Black moves 4 . . . Re8+ instead, then 5 Kf7, Rd8 6 Bc7, Rh8 7 Bd6+ leads by a transposition of moves into the actual play.</p>
5 Ke7    Rg8 <br/>
6 Kf7    Rd8<br/>
7 Bc7    Rh8 <br/>
8 Bd6+    Ka5 <br/>
9 Bf8<br/>
<p>Cuts off the Rook from the Pawn, but does Black have another resource? </p>
9 . . .     Rh7+ <br/>
10 Bg7 <br/>
<p>White wins, as the Pawn will Queen.</p>`,
'163': `1 c7        Re2+<br/>
<p>THE Rook tries to return to the first rank, to prevent the Pawn's Queening. Should the Rook attempt to get behind the Pawn, then this would occur: 1 . . . Rg5+ 2 Kd4, Rg4+ 3 Kc3, Rg3+ 4 Kb2, Rg2+ 5 Ka3, and White wins.</p>
2 Kf6        Re8<br/>
3 Ba4!        Rg8<br/>
4 Kf7        Rh8<br/>
5 Kg7        Ra8<br/>
<p>The only square left, as 5 . . . Rc8 allows 6 Bd7+ winning the Rook.</p>
6 Bc6        Ra7<br/>
<p>The Rook could not remain on the first rank. This looks good though, as the Pawn is pinned and cannot advance.</p>
7 Bd7+!<br/>
<p>Cleverly interposing the Bishop, so that the Pawn is freed.</p>
7 . . .        Kh4<br/>
8 c8=Q<br/>
<p>White wins</p>`,
'164': `<p>AN INTERESTING battle between Bishop and Rook.</p>
1 a7        Rf5+<br/>
<p>The Rook must get back to the first rank, to stop the Pawn. It cannot do so by 1 . . . Rh8 as 2 Bf6+ wins the Rook.</p>
2 Ke2     Re5+<br/>
<p>If 2 . . . Rf8 3 Bf6+, Kc5   4 Be7+ wins the Rook.</p>
3 Kd2        Re8.<br/>
4 Bf2+<br/>
<p>Now it's the Bishop's turn to check.</p>
4 . . .    Ke5<br/>
5 Bg3+    Kf5<br/>
6 Bb8<br/>
<p>Shuts off the Rook and wins for White.</p>`,
'165': `<p>THERE is a great deal of brilliant play in this innocent-looking miniature.</p>
1 b7        Ra5+<br/>
2 Kd6!<br/>
<p>On 2 Kxe6 for example, Black draws by 2. . . Ra6+ (but not by 2. . . Rb5 3 Bc6+, Kd8 4 Bxb5, Kc7 5 Ba6, and White wins) 3 Kd5, Rb6 followed by 4 Kd4,  Rxb7.</p>
2 . . .         Rb5!<br/>
<p>A subtle defense involving the sacrifice of the Rook and an offer of the Bishop!</p>
<p>There was no hope in 2 . . . Ra6+ 3 Bc6+, and the Pawn will advance, since Black must drop all business to get out of check.</p>
3 Bc6+        Kd8<br/>
4 Bxb5        Bc8!<br/>
<p>The idea being that 5 b8=Q or 5 b8=R stalemates Black.</p>
5 b8=B!<br/>
<p>A clever under-promotion. Two Bishops do not generally win against one Bishop, but Black is cramped and in a mating net.</p>
5 . . .        Bg4<br/>
<p>If the Bishop moves to the other diagonal by 5. . . Bb7, then 6 Bc7+, Kc8 7 Bd7#.</p>
6 Bc7+        Kc8<br/>
7 Ba6#<br/>`,
'166': `<p>BEFORE we see how White wins, let us look at some interesting tries:</p>
1 g7, Be6+ 2 Kxe6, Kxg7, and Black draws against the Rook Pawn and a Bishop that does not control the Pawn's Queening square.<br/>
1 Kf6, Be8 2 h4, Bxg6 3 Bxg6, and Black draws by stalemate.<br/>
<p>C]    1 Bg8, Be6+ 2 Kxe6, Kxg6, and again Black gets to the corner and draws.</p>
<p>The solution is:</p>
1 Kg8!        Be6+<br/>
<p>A pretty alternative is 1 . . . Bf5 2 g7! Bxh7+ 3 Kh8, Kg6 (the Bishop must obviously stay where it is) 4 h4, Kh6 5 h5, and Black is in zugzwang. He must move, though every move loses.</p>
2 Kh8        Bf5<br/>
<p>Against 2 . . . Bd5, White proceeds with 3 g7, Be6 4 Bg8, Bf5 5 Bd5, Bh7 6 Be4, Bxe4 7 g8=Q and wins.</p>
3 g7!        Bxh7<br/>
4 h3!<br/>
<p>The key move! If 4 h4 instead, 4 . . . Kg6 5 h5+, Kh6, and it is White who is in zugzwang, and must give up both Pawns.</p>
4. . .        Kg6<br/>
5 h4        Kh6<br/>
6 h5<br/>
<p>White wins: Black is out of moves.</p>`,
'167': `1 g6<br/>
<p>THE first step in the process of promoting one of the Pawns is to bring them both to the sixth rank.</p>
1 . . .        Bc2<br/>
2 f5        Bb3<br/>
3 Kg5        Bc2<br/>
4 f6        Bb3<br/>
5 Bb4+        Kg8<br/>
<p>On 5. . . Ke8, White comes around by 6 Kh6, and 7 Kg7 followed by 8 f7+ and 9 f8=Q, Black being unable meanwhile to do anything but watch.</p>
6 Kf4<br/>
<p>To swing the King around to f7 where it will help the Bishop Pawn's advance.</p>
6 . . .        Bc4<br/>
<p>On 6 . . . Bc2 7 f7+ wins at once.</p>
7 Ke5        Bb3<br/>
8 Kd6        Kf8<br/>
<p>Here too, if 8 . . . Bc2 9 f7+, Kg7 10 Ke7 is decisive.</p>
9 Kd7+        Kg8<br/>
10 Ke7        Bc4<br/>
11 f7+<br/>
<p>White wins</p>`,
'168': `1 Bc4+        Ke7<br/>
2 Ke4!<br/>
<p>PREMATURE would be 2 f5, Bg7 3 Kf4, Bh8 and Black has an easy draw. White would have no winning chances after the anti-positional 4 e6, while 4 f6+ allows the Bishop to sacrifice itself for the two Pawns.</p>
2 . . .        Bg7<br/>
3 Kf5        Bh6<br/>
4 Kg4!        Bf8<br/>
<p>Choice is fearfully limited. If 4 . . . Bg7 5 Kg5 leads to the actual play, while 4 . . . Ke8 5 f5, Ke7 6 f6+, Ke8 7 e6 wins easily.</p>
5 Kg5        Bg7<br/>
6 Kg6<br/>
<p>White moves his King to a dominating position before advancing his Pawns.</p>
6 . . .        Bf8<br/>
<p>On 6 . . . Kf8 7 Kh7 wins the Bishop, while 6 . . . Bh8 allows 7 Kh7, cornering the Bishop literally and figuratively.</p>
7 f5        Ke8<br/>
8 f6<br/>
<p>Note that White keeps his Pawns as much as possible on squares opposite in color to those controlled by his Bishop.</p>
8 . . .         Bc5<br/>
9 Kg7        Bf8+<br/>
10 Kg8        Bc5<br/>
11 e6        Bb4<br/>
12 Bb5+        Kd8<br/>
13 Kf7        Bc5<br/>
14 e7+<br/>
<p>White wins</p>`,
'169': `<p>IN CONVOYING the Pawns up the board, care must be taken that the enemy Bishop does not sacrifice itself for both Pawns, thereby forcing a draw.</p>
1 Ke2        Kg4<br/>
2 Bel<br/>
<p>Not at once 2 f3+, Kg3, and time will be lost evicting the King.</p>
2 . . .        Bd6<br/>
3 f3+        Kf4<br/>
4 g3+        Kf5<br/>
5 g4+<br/>
<p>The Pawns, you will notice, occupy whenever possible squares opposite in color to those controlled by the Bishop. In this way, the Pawns and the Bishop dominate as many squares as possible. Here, for example, the Pawns attack the white squares, while the Bishop attacks the black.</p>
5 . . .         Ke6<br/>
<p>If 5 . . . Kf4 6 Bd2+, Kg3 7 g5, Be5 8 g6, Bg7 (otherwise 9 Bh6 followed by 10 g7 wins) 9 Ke3, Kh4 (clearly if 9 . . . Bh6+ 10 Ke4, Bg7</p>
11 Bf4+, Kg2 12 Be5 is decisive) 10 Ke4, Kh5 11 Kf5, Bd4 12 Bg5, Bg7 13 Bf6, Bf8 14 g7 wins.<br/>
6 Kd3        Kd5<br/>
7 Bd2        Bc7<br/>
8 f4        Bb6<br/>
<p>To prevent White's intended maneuver 9 Ke3, 10 Kf3, 11 g5 and 12 Kg4</p>
9 Bc3        Bc5<br/>
10 g5<br/>
<p>The Pawns now occupy black squares (the color of those controlled by the Bishop). They do so when they can move without hindrance to the white squares.</p>
10 . . .        Bb6<br/>
11 g6        Ke6<br/>
12 Ke4        Bd8<br/>
13 f5+        Ke7<br/>
14 Kd5        Kf8<br/>
<p>If 14 . . . Bc7 15 f6+, Kf8 16 Bb4+, Kg8 17 f7+, and White wins.</p>
15 Ke6        Bg5<br/>
16 f6        Be3<br/>
17 Bb4+<br/>
<p>White wins.</p>`,
'170': `1 Bf1        Bg4<br/>
2 h4        Bf5<br/>
3 Kf2        Bg4<br/>
4 Ke3        Be6<br/>
5 Kf4        Bd7<br/>
6 Bd3<br/>
<p>CAREFULLY avoiding 6 g4 (to continue with 7 Be2 and 8 g5+) as Black would sacrifice his Bishop for the Knight Pawn, and then have a draw against a Rook Pawn and a Bishop of the wrong color (one that does not control the Pawn's Queening square).</p>
6 . . .        Bh3<br/>
7 Bf5        Bf1<br/>
8 g4        Be2<br/>
<p>Threatening to force a draw by 9 . . . Bxg4.</p>
9 g5+        Kh5<br/>
<p>If 9 . . . Kg7, White continues with 10 Bg4 followed by 11 h5.</p>
10 Kg3!<br/>
<p>Avoiding the pitfall 10 g6, Kh6 11 Ke5, Bh5 12 Kf6, Bxg6 13 Bxg6, stalemate.</p>
10 . . .         Bd1<br/>
11 Be4        Bb3<br/>
12 Bf3+    Kg6<br/>
13 Kf4    Bf7<br/>
14 h5+    Kg7<br/>
15 Ke5    Bb3<br/>
16 Be4<br/>
<p>Note how possession is taken of the white squares before playing h6+.</p>
16 . . .    Bf7<br/>
17 h6+<br/>
<p>The Pawns of course occupy whenever possible squares opposite in color to those controlled by the Bishop.</p>
17 . . .    Kh8<br/>
18 Kf6    Bh5<br/>
19 Bd5<br/>
<p>Not 19 g6 allowing 19 . . . Bxg6, and a draw, nor 19 Bg6 (to drive off Black's Bishop) since it blocks the Knight Pawn.</p>
19 . . .    Kh7<br/>
20 Bf7    Be2<br/>
21 g6+<br/>
<p>White wins.</p>`,
'171': `1 f4+        Kd6<br/>
2 f5        Ke5<br/>
3 d4+        Kf6<br/>
4 Kf4        Bb3<br/>
5 Bc6        Bc2<br/>
6 Bd7<br/>
<p>PROTECTS the BP and threatens to advance the QP.</p>
6. . .        Bb3<br/>
7 Ke4        Bc4<br/>
<p>If Black plays 7. . . Bc2+, then 8 Kd5, Bxf5 9 Bxf5, Kxf5 10 Kc6 wins for White.</p>
8 d5        Bb3<br/>
9 Be6        Bc4<br/>
10 Kd4        Be2<br/>
<p>If 10 . . . Ba2 11 Kc5, Bb3 12 d6 wins.</p>
11 d6        Bb5<br/>
12 d7        Ke7<br/>
13 f6+        Kd8<br/>
14 f7        Ke7<br/>
15 f8=Q+    Kxf8<br/>
16 d8=Q+<br/>
<p>White wins</p>`,
'172': `<p>A WIN for White seems optimistic, his Pawns look so shaky.</p>
1 Kg5    Ng4<br/>
<p>On 1 . . . Kxe7, White replies 2 Kxf5, and Black's Knight is stranded. The continuation could then be: 2 . . . Kf7 3 e6+, Ke7 4 Ke5, Ke8 5 Kf6, Kf8 6 e7+, Ke8 7 Bb5#.</p>
2 Kxf5<br/>
<p>But not 2 Bxg4, fxg4 3 Kxg4,  Kxe7, as after 4 Kf5, Kf7 5 e6+, Ke7! (in King and Pawn against King positions the defender blockades the Pawn whenever possible) 6 Ke5, Ke8! (so that the Pawn, when it reaches the seventh rank, can do so only with check) 7 Kf6, Kf8 8 e7+ (delaying the Pawn's advance does not help, as White cannot force a win) Ke8 9 Ke6 and Black draws by stalemate.</p>
2 . . .    Nxe5<br/>
3 Ke6!    N  moves<br/>
4 Bishop mates accordingly, either Bb5# or Bh5#.<br/>`,
'173': `1 Kh6        Bf7<br/>
<p>READY to meet 2 Bxh7 with 2 . . . Bxc4, after which Black's Bishop can sacrifice itself for the remaining Pawn: and draw.</p>
2 Bd3        Be6<br/>
<p>Obviously if 2 . . . Kg8, White takes the Rook Pawn with check. while 2 . . . Bg8 is refuted by 3 g5, Bf7 4 Bxh7, Bxc4 5 g6 followed by 6 g7#.</p>
3 g5        Bg8<br/>
4 Bxh7!<br/>
<p>This can bowl a fellow over!</p>
4 . . .        Bxh7<br/>
<p>There is no relief in 4 . . . Bxc4 5 g6 and mate next move.</p>
5 g6        Bxg6<br/>
<p>All that is left. If 5 . . . Bg8 6 g7#, or if 5 . . . Kg8 6 gxh7+, Kh8 7 Kg6, b5 8 c5, b4 9 c6, b3 10 c7 b2 11 c8=Q#.</p>
6 Kxg6              Kg8<br/>
7 Kf                  Kf8<br/>
8 Ke6                Ke8<br/>
9 Kd6                Kd8<br/>
10 Kc6                  Kc8<br/>
11 Kxb6              Kb8<br/>
12 c5                   Kc8<br/>
13 Kc6!<br/>
<p>White wins</p>`,
'174': `1 g7        e1= Q<br/>
2 g8=Q        Kb7<br/>
<p>THE King must flee. If Black tries aggressive action, then after   2 . . . Qa5 3 Kd7+, Kb7 4 Qc8#, or if 2 . . . Qh4+ 3 Kc7+ and mate follows next move.</p>
3 Qb3+        Kc6<br/>
<p>Or 3 . . . Ka8 4 Qa4+, Kb7 5 5 Qb5+, Ka8 6 Qa6+, Kb8 7 Bd6#.</p>
4 Qb6+        Kd5<br/>
5 Qb5!<br/>
<p>A quiet move, leading to a remarkable position. The threat is 6 Bf2, discovering check and attacking the Queen.</p>
<p>It is Black's turn to move, but despite all the moves at his command, he is helpless. The proof:</p>
<p>A] 5 . . . Ke6    6 Qe8+ win-ning the Queen.</p>
<p>B] 5. . . Ke4     6 Qe8+ win-ning the Queen.</p>
<p>C] 5 . . .    Qe6    6 Qb3+ win-ning the Queen.  </p>
<p>D] 5 . . .    Qe4    6 Qb7+ win-ning the Queen.</p>
<p>E] 5 . . .    Qh4+ 6 Be7+ win-ning the Queen.  </p>
<p>F] 5 . . .    Qg3 6 Bf2+  win-ning the Queen.  </p>
<p>G] 5. . .    Qc3 6 Bb4+  win-ning the Queen.  </p>
<p>H] 5 . . .    Qd2 6 Qd7+  win-ning the Queen.  </p>
<p>I] 5 . . .    Qh1 6 Qb7+  win-ning the Queen.  </p>
<p>J] 5 . . .    Qd1 6 Qd7+  win-ning the Queen.  </p>
<p>K] 5 . . .    Qc1 6 Be3+ win-ning the Queen.  </p>
<p>L] 5 . . .    Qa1 6 Bd4+ Kxd4 7. Qe5+  sweet skewer of the Queen.</p>
<p>White wins.</p>`,
'175': `<p>WHITE has two pretty winning possibilities, based on his opponent's choice of defense.</p>
1 a7<br/>
<p>White resists the tempting pin of the Knight, as after 1 Bc3, Kxa6 2 Bxb4, Black has been stalemated.</p>
1 . . .        Nc6<br/>
<p>If 1 . . . Ka6 2 Kb8, Nc6+ 3 Kc7, Nxa7 4 b4, Nc8 5 Kxc8, Ka7 6 Kc7, Ka6 7 Kc6, Ka7 8 Kxb5 and wins.</p>
2 Kb7        Nxa7<br/>
3 Bc3+<br/>
<p>The hasty 3 Kxa7 allows 3 . . . Kb4 followed by 4 . . . Kxb3, and Black draws.</p>
3 . . .         b4<br/>
4 Bd4<br/>
<p>Threatens to capture the Knight.</p>
4 . . .         Nb5<br/>
<p> Saves the Knight, but at a fearful cost.</p>
5 Bxb6#<br/>`,

}
