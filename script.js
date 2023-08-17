const bankName = "Access Bank";
const userName = "Yusuf Muhammad Najeeb";
let accountBalance = 10000;
let userPin = 1234;
let amount, toWithdraw, balance, receipt;

alert(`Welcome to ${bankName}.
Your Everyday Cash Paddi💱.

INSERT YOUR CARD TO PERFORM A TRANSACTION`);
let inputPin = +prompt("Please enter you secret pin");

if (inputPin === userPin) {
  let process =
    +prompt(`Main menu: Please enter a corresponding number to carryout your transaction...
  1. Balance enquiry            5. Transfer
  2. Pin Change                   6. Cash Withdrawal
  3. Utility/Bill Payment       7. Fast Cash
  4. Mini Statement             8. Others`);

  switch (process) {
    case 1:
      alert(`Your account balance is ₦${accountBalance}.
      Thank YOU.`);
      break;
    case 2:
      {
        let oldPin = +prompt(`Enter old Pin`);
        let newPin = +prompt(`Enter new Pin`);
        let msg =
          oldPin === userPin
            ? alert("Successful: Your pin has been updated")
            : alert(
                "Wrong pin: You will be barred after 3 unsuccessful attempts"
              );
        userPin = newPin;
      }
      break;
    case 3:
      alert("Coming Soon");
      break;
    case 4:
      alert(`Feature Unavailable`);
      break;
    case 5:
      let bank = +prompt(`
      1. Access Transfer
      2. Other banks`);
      if (bank === 1) {
        let accountNum = prompt("Enter Account Number");
        amount = +prompt("Enter amount");
        receipt = confirm("Would you like to take a receipt?");
        if (amount <= accountBalance) {
          if (receipt === true) {
            alert(`Please take your cash ${amount} and receipt;
          Your account balance: ${accountBalance - amount}`);
          } else {
            alert(`Please take your cash ${amount};
          Your account balance: ${accountBalance - amount}`);
          }
        } else {
          alert("Insufficient fund");
        }
      } else if (bank === 2) {
        let bankName = prompt(`Select destination bank...
        1. First Bank
        2. GT Bank
        3. Fidelity
        4. UBA Bank
        5. Eco Bank`);
      } else {
        alert("Invalid response");
      }
      break;
    case 6:
      amount = +prompt(`Select Amount
      1. 500            2. 1000
      3. 5000           4. 10000
      5. 20000          6. Others`);

      if (amount === 1) {
        amount = 500;
      } else if (amount === 2) {
        amount = 1000;
      } else if (amount === 3) {
        amount = 5000;
      } else if (amount === 4) {
        amount = 10000;
      } else if (amount === 5) {
        amount = 20000;
      } else if (amount === 6) {
        amount = +prompt("Enter amount");
      } else {
        alert("Invalid input: Please Enter a valid amount");
      }
      switch (amount) {
        case 500:
        case 1000:
        case 5000:
        case 10000:
        case 20000:
          if (amount <= accountBalance) {
            toWithdraw = amount;
            balance = accountBalance - amount;
            alert("Please wait while your transaction is processing...");
            receipt = confirm("Would you like to take a receipt?");
            if (receipt === true) {
              alert(`Please take your cash ${toWithdraw} and receipt;
            Your account balance: ${balance}`);
            } else {
              alert(`Please take your cash ${toWithdraw};
            Your account balance: ${balance}`);
            }
          } else {
            alert("Insuffiecient Funds");
          }
          break;
        case amount:
          if (amount <= accountBalance) {
            toWithdraw = amount;
            balance = accountBalance - amount;
            alert("Please wait while your transaction is processing...");
            receipt = confirm("Would you like to take a receipt?");
            if (receipt === true) {
              alert(`Please take your cash ${toWithdraw} and receipt;
          Your account balance: ${balance}`);
            } else {
              alert(`Please take your cash ${toWithdraw};
            Your account balance: ${balance}`);
            }
          } else {
            alert("Insufficient Fund");
          }
          break;
        default:
          alert("Coming soon");
          break;
      }
      break;
    case 7:
      alert(`Feature unavailable`);
      break;
    case 8:
      alert(`Feature unavailable`);
      break;
    default:
      alert("Please enter a valid number....");
  }
} else {
  alert("Please Enter a Valid pin");
}
