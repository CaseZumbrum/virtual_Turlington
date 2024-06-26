import json
import sys
from thefuzz import fuzz


class Club:
    def __init__(self, name, tags, meetStart, meetLength, day, app,links,info):
        self.name = name
        self.tags = tags
        self.meetStart = meetStart
        self.meetLength = meetLength
        self.day = day
        self.app = app
        self.links = links
        self.info = info

    def print(self):
        print("{" f"\\\"name\\\":\\\"{self.name}\\\", \\\"tags\\\":{self.tags}, \\\"meetStart\\\":{self.meetStart}, \\\"meetLength\\\":{self.meetLength}, \\\"day\\\":{self.day}, \\\"app\\\":{self.app}, \\\"links\\\":{self.links}, \\\"info\\\":\\\"{self.info}\\\"" + "}", end="")

class User:
    def __init__(self, clubName, tags, meetStart, meetLength, day, app):
        self.clubName = clubName
        self.tags = tags
        self.meetStart = [meetStart]
        self.meetLength = [meetLength]
        self.day = day
        self.app = app


def nameFilter(clubs, userName):
    matched_clubs = []
    for club in clubs:
        ratio = fuzz.ratio(club.name.lower(), userName.lower())
        club.score += (ratio*ratio) /1000  # Increase the score based on ratio, have it scale based on ratio percent
        if ratio >= 50:
            matched_clubs.append(club)
    return matched_clubs

def tagFilter(clubs, userTags):
    matched_clubs = []
    for club in clubs:
        tagCount = sum(1 for tag in userTags if tag in club.tags)
        #matched_clubs.append((club, tagCount))
        for i in range(tagCount):
            matched_clubs.append(club)
            matched_clubs.append(club)
        
   # matched_clubs.sort(key=lambda x: x[1], reverse=True)
    
    #sorted_clubs = [club for club, _ in matched_clubs]
    return matched_clubs

def timeFilter(clubs, userTime):
    matched_clubs = []
    for club in clubs:
        if any(time in userTime for time in club.meetStart):
            matched_clubs.append(club)
    return matched_clubs

def dayFilter(clubs, userDay):
    matched_clubs = []
    for club in clubs:
        if any(day in userDay for day in club.day):
            matched_clubs.append(club)
    return matched_clubs


def lengthFilter(clubs, userLength):
    matched_clubs = []
    for club in clubs:
        for club_len in club.meetLength:
            if(userLength[0] != 0):
                ratio = club_len / userLength[0] # Create a ratio between user Max and the club meeting time
                if ratio <= 1: # If club meeting is less than user Max
                    club.score += ratio * 2 # Add appopriate, weighs less than name/tag but more than other
                    matched_clubs.append(club)
                    break
    return matched_clubs




def appFilter(clubs, userApp):
    matched_clubs = []
    for club in clubs:
        if club.app == userApp:
            matched_clubs.append(club)
    return matched_clubs


def bestFilter(tagMatch, timeMatch, dayMatch, lengthMatch, appMatch, clubs):
    best_clubs = {}

    for club in clubs:
        best_clubs[club] = club.score  # Initialize with club score

    for match_list in [tagMatch, timeMatch, dayMatch, lengthMatch, appMatch]:
        for club in match_list:
            if club in best_clubs:
                best_clubs[club] += 1  # Increment score by 1
            else:
                best_clubs[club] = club.score  # Initialize with club score

    ranked_clubs = sorted(best_clubs.items(), key=lambda x: x[1], reverse=True)

    return ranked_clubs






def main():

    # Take in user data and make a user
    fileInfo = []
    file = open("scripts/clubs.txt", "r")
    file_contents = file.read()

    end_index = file_contents.find('}')

    # Slice the string accordingly
    user = file_contents[0: end_index+1]
    club = file_contents[end_index + 2:]

    # Append the sliced strings to the list
    fileInfo.append(user)
    fileInfo.append(club)
  




    userData = json.loads(fileInfo[0])
    user = User(
        userData['clubName'],
        userData['tags'],
        userData['meetStart'],
        userData['meetLength'],
        userData['day'],
        userData['app']
    )

    # Take in club data, add club to list of clubs
    clubData = json.loads(fileInfo[1])
    clubs = []
    for club_info in clubData:
        club = Club(
            club_info['name'],
            club_info['tags'],
            club_info['meetStart'],
            club_info['meetLength'],
            club_info['day'],
            club_info['app'],
            club_info['links'],
            club_info["info"])
        club.score = 0.0
        clubs.append(club)



    nameMatch = nameFilter(clubs, user.clubName)
    tagMatch = tagFilter(clubs, user.tags)
    timeMatch = timeFilter(clubs, user.meetStart)
    dayMatch = dayFilter(clubs, user.day)
    lengthMatch = lengthFilter(clubs, user.meetLength)
    appMatch = appFilter (clubs, user.app)
    bestMatch = bestFilter(tagMatch, timeMatch, dayMatch, lengthMatch, appMatch, clubs)

    print("\"[",end="")
    for index, data in enumerate(bestMatch):
        ##print(f"{i}. {club.name} (Score: {score})")
        
        data[0].print()
        if(index != len(bestMatch)-1):
            print(",",end="")
    
    print("]\"",end="")

if __name__ == "__main__":
    main()
