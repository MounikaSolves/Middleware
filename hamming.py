# XOR operation between two binary strings
def xor(a, b):
    result = ''
    for i in range(1, len(b)):
        result += '0' if a[i] == b[i] else '1'
    return result

# Perform Modulo-2 division
def mod2div(dividend, divisor):
    pick = len(divisor)
    tmp = dividend[0:pick]

    while pick < len(dividend):
        if tmp[0] == '1':
            tmp = xor(divisor, tmp) + dividend[pick]
        else:
            tmp = xor('0'*pick, tmp) + dividend[pick]
        pick += 1

    # Final XOR step
    if tmp[0] == '1':
        tmp = xor(divisor, tmp)
    else:
        tmp = xor('0'*pick, tmp)
    
    return tmp  # This is the remainder (CRC)

# Sender-side: Encode data with CRC
def encodeData(data, key):
    l_key = len(key)
    appended_data = data + '0'*(l_key - 1)
    remainder = mod2div(appended_data, key)
    codeword = data + remainder
    return codeword, remainder

# Receiver-side: Check for error
def checkData(received_codeword, key):
    remainder = mod2div(received_codeword, key)
    if '1' in remainder:
        print("Error Detected")
    else:
        print("No Error")
# ----------------------------
# Example usage
data = "1001"
key = "1101"  # Generator polynomial
# Sender side
transmitted_codeword, crc = encodeData(data, key)
print("Original Data:     ", data)
print("CRC Remainder:     ", crc)
print("Transmitted Code:  ", transmitted_codeword)
# Receiver side
print("\n--- Receiver Side Check ---")
checkData(transmitted_codeword, key)

# Optional: test error detection by flipping a bit
print("\n--- Introduce Error ---")
tampered_codeword = transmitted_codeword[:3] + ('1' if transmitted_codeword[3] == '0' else '0') + transmitted_codeword[4:]
print("Tampered Codeword: ", tampered_codeword)
checkData(tampered_codeword, key)