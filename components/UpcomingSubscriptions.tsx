import React from 'react'
import {View, Text, Image} from 'react-native'
import {formatCurrency} from "@/lib/utils"

const UpcomingSubscriptions = ({name,price,daysLeft,icon,currency}: UpcomingSubscription) => {
  return (
    <View className={"upcoming-card"}>
        <View className={"upcoming-row"}>
            <Image className={"upcoming-icon"} source={icon} />
            <View className={""}>
                <Text className={"upcoming-price"}>
                    {formatCurrency(price,currency)}
                </Text>
                <Text className={"upcoming-meta"} numberOfLines={1}>
                    {daysLeft > 1 ? `${daysLeft} days left` : "Last day"}
                </Text>
            </View>
        </View>

        <Text className={"upcoming-name"} numberOfLines={1}>
            {name}
        </Text>
    </View>
  )
}

export default UpcomingSubscriptions